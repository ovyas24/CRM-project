import { Router } from 'express';
import { getAllProject } from '../Controllers/project.controller';

const router = Router();

router.get('/', getAllProject);

export default router;