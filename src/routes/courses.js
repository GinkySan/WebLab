import express from 'express';
import jwt from 'jsonwebtoken';
import db from '../database.js';

const router = express.Router();
const JWT_SECRET = 'your_secret_key';

// проверки роли администратора
const checkAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err || decoded.role !== 'admin') {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = decoded;
        next();
    });
};

// создание курса
router.post('/', checkAdmin, (req, res) => {
    const { title, description, price, instructor } = req.body;

    if (!title || !description || !price || !instructor) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.run(
        'INSERT INTO courses (title, description, price, instructor) VALUES (?, ?, ?, ?)',
        [title, description, price, instructor],
        (err) => {
            if (err) {
                console.error("Database error:", err); 
                return res.status(400).json({ error: 'Failed to add course' });
            }
            res.status(201).json({ message: 'Course added successfully' });
        }
    );
});

// получение всех курсов
router.get('/', (req, res) => {
    db.all('SELECT * FROM courses', (err, courses) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(courses);
    });
});

// подписка
router.post('/buy', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { courseId } = req.body;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const userId = decoded.id;

        db.get('SELECT * FROM courses WHERE id = ?', [courseId], (err, course) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (!course) {
                return res.status(404).json({ error: 'Course not found' });
            }

            db.run(
                'INSERT INTO user_courses (user_id, course_id) VALUES (?, ?)',
                [userId, courseId],
                (err) => {
                    if (err) {
                        console.error("Database error:", err);
                        return res.status(400).json({ error: 'Failed to subscribe to course' });
                    }
                    res.json({ message: 'Successfully subscribed to course' });
                }
            );
        });
    });
});

export default router;