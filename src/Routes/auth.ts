import { Request, Response, NextFunction, Router } from "express";
import {signin, signup, signout } from "../Controllers/auth.controller";
import isAuthenticated from "../Middleware/isAuthenticated";
const router = Router();
    
router.post("/signup", signup);
router.post("/signin", signin);
router.get('/signout', isAuthenticated, signout)
 
export default router;