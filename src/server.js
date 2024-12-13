import express from 'express';
import cors from 'cors';
import db from './database.js';
import authRoutes from './routes/auth.js';
import coursesRoutes from './routes/courses.js';
import profileRoutes from './routes/profile.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/courses', coursesRoutes);
app.use('/profile', profileRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});