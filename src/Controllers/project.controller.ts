// create project , update project, delete project , get project, gett all project
import { NextFunction, Request, Response } from 'express';
import ProjectService from '../Services/project';

export const createProject = async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProjectService.add(req.body).catch((err) => {
        return next(err)
    });
    res.status(200).send(result);
};

export const getProjectById = async (req: Request, res: Response, next: NextFunction) => {
    const criteria: {_id: string} = {
        _id: req.params.id || req.body.id
    }
    const result = await ProjectService.get(criteria).catch((err) => {
        return next(err)
    });
    res.status(200).send(result);
}

export const getAllProject = async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProjectService.getAll({}).catch((err) => {
        return next(err)
    });
    res.status(200).send(result);
}