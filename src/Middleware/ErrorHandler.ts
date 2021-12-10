import { Request, Response, NextFunction } from 'express';

interface Error {
    status: number | undefined;
    message: string
}

// all other error handlers
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
};

export default errorHandler;