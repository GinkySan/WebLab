import express from 'express';
import jwt from 'jsonwebtoken';
import db from '../database.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Проверка авторизация
const checkAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });
};

// Получение информации
router.get('/', checkAuth, (req, res) => {
    const userId = req.user.id;

    db.get('SELECT * FROM users WHERE id = ?', [userId], (err, user) => {
        if (err || !user) {
            return res.status(404).json({ error: 'User not found' });
        }

        db.get('SELECT COUNT(*) as courseCount FROM user_courses WHERE user_id = ?', [userId], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Internal server error' });
            }

            const courseCount = result.courseCount || 0;

            res.json({
                email: user.username,
                role: user.role,
                courseCount: courseCount,
            });
        });
    });
});

export default router;