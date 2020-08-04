import { Router } from 'express';
import { LoginControllers } from '../controllers/login.controller';

const router = Router();

router.post('/signup', LoginControllers.signup);
router.post('/signin', LoginControllers.signin);

export default router;