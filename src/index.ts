import 'reflect-metadata';
import express, { Request, Response, Router } from 'express';
import { createConnection, Connection } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from './entities/User';
import { Course } from './entities/Course';
import { UserCourse } from './entities/UserCourse'; // Исправлено название

// Создаем приложение Express
const app = express();
app.use(express.json());

// Секретный ключ для JWT
const JWT_SECRET = 'your_jwt_secret';

// Подключение к базе данных
createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'username',
  password: 'password',
  database: 'dbname',
  entities: [User, Course, UserCourse],
  synchronize: true, // Синхронизация схемы базы данных (для разработки)
  logging: false,
})
  .then((connection: Connection) => {
    console.log('Подключение к базе данных успешно установлено.');

    // Создаем маршруты
    const router = Router();

    // Регистрация пользователя
    router.post('/register', async (req: Request, res: Response) => {
      const { username, password } = req.body;

      // Проверка наличия обязательных полей
      if (!username || !password) {
        return res.status(400).json({ message: 'Имя пользователя и пароль обязательны.' });
      }

      // Хеширование пароля
      const hashedPassword = await bcrypt.hash(password, 10);

      try {
        const user = new User();
        user.username = username;
        user.password = hashedPassword;
        await connection.manager.save(user);

        res.status(201).json({ message: 'Пользователь успешно зарегистрирован.' });
      } catch (err) {
        console.error('Ошибка регистрации пользователя:', err);
        res.status(500).json({ message: 'Ошибка регистрации пользователя.' });
      }
    });

    // Авторизация пользователя
    router.post('/login', async (req: Request, res: Response) => {
      const { username, password } = req.body;

      // Проверка наличия обязательных полей
      if (!username || !password) {
        return res.status(400).json({ message: 'Имя пользователя и пароль обязательны.' });
      }

      try {
        const user = await connection.getRepository(User).findOne({ where: { username } });

        if (!user) {
          return res.status(404).json({ message: 'Пользователь не найден.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Неверный пароль.' });
        }

        // Генерация JWT
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
      } catch (err) {
        console.error('Ошибка авторизации:', err);
        res.status(500).json({ message: 'Ошибка авторизации.' });
      }
    });

    // Добавление курса в аккаунт пользователя
    router.post('/user/courses', async (req: Request, res: Response) => {
      const { userId, courseId } = req.body;

      // Проверка наличия обязательных полей
      if (!userId || !courseId) {
        return res.status(400).json({ message: 'Идентификатор пользователя и курса обязательны.' });
      }

      try {
        const user = await connection.getRepository(User).findOne(userId);
        const course = await connection.getRepository(Course).findOne(courseId);

        if (!user || !course) {
          return res.status(404).json({ message: 'Пользователь или курс не найдены.' });
        }

        const userCourse = new UserCourse();
        userCourse.user = user;
        userCourse.course = course;
        await connection.manager.save(userCourse);

        res.status(201).json({ message: 'Курс успешно добавлен в аккаунт пользователя.' });
      } catch (err) {
        console.error('Ошибка добавления курса:', err);
        res.status(500).json({ message: 'Ошибка добавления курса.' });
      }
    });

    // Подключение маршрутов к приложению
    app.use('/api', router);

    // Запуск сервера
    app.listen(3000, () => {
      console.log('Сервер запущен на http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Ошибка подключения к базе данных:', err);
  });