import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction, response } from 'express';
import { routes } from './routes';
import { AppError } from '@shared/error/appError';
import '@shared/container';



const app = express();

app.use(express.json());
app.use(routes)

app.use((err: AppError, request: Request, reponse: Response, next: NextFunction) => {

    if (err instanceof Error) {
        return response.status(err.statusCode).json({ status: 'error', message: err.message });
    }

    return response.status(500).json({ status: 'error', message: 'Internal Server Error' });
})

export { app }