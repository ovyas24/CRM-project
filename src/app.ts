import express, { Application, Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import Routes from './Routes/index';

import ErrorHandler from './Middleware/ErrorHandler';
import './types';

dotenv.config();

import connectDB from './db.config';

const app: Application = express();

//setting middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//connect to db
connectDB();

// connecting to routes
Routes(app);
app.use(ErrorHandler);

//start server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});