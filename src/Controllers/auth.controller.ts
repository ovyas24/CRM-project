import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../Services/user";

export const signin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const user = await User.getByEmail(req.body.email);
    if(!user) return next({status: 404, message:"User not found"});
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if(!isMatch) return next({status: 400, message: "Password is incorrect"});
    const token = jwt.sign(
        {
            _id: user._id,
            email: user.email,
            name: user.name,
        },
        process.env.JWT_SECRET || "secret",
        { expiresIn: "1d" }
    );
    res.cookie("jwt", token, {
        maxAge: 3600000 * 24 * 1,
        httpOnly: true,
    });
    res.status(200).json({
        status: "success",
        token,
        data: {
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
            },
        },
    });
}

export const signup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = await User.getByEmail(req.body.email);
    if(user) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const { email, name, username } = req.body;
    const nUser: UserType = {
        name,
        email,
        password: hashedPassword,
        username,
        projects: [],
        avatar: ""
    }
    const newUser = await User.add(nUser);
    res.status(201).json({
        status: "success",
        data: {
            user: newUser,
        },
    });
}

export const signout = (req: Request, res: Response) => {
    res.clearCookie("jwt");
    res.status(200).json({
        status: "success",
        message: "Signout success",
    });
}