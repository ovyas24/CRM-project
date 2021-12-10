import { Application } from 'express';
import isAuthenticated from '../Middleware/isAuthenticated';
import projectRouter from './project';
import authRoutes from './auth';

export default function routes(app: Application) {
    app.use('/api/auth', authRoutes)
    app.use('/api/projects', isAuthenticated, projectRouter);
}