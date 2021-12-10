import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// is AUthenticated verifyies token is its correct its do a next or elese throws token inncorrect error
// read token from cokies
const isAuthenticated = (req: any, res: Response, next: NextFunction) =>{
    const token = req.header('x-auth-token');
    console.log(token);
    if(!token) return res.status(401).send('Access denied. No token provided.');
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = decoded;
        next();
    }catch(ex){
        res.status(400).send('Invalid token.');
    }
}
export default isAuthenticated;