import { Router } from 'express';
import { LoginControllers } from '../controllers/login.controllers';

const router = Router();

router.post('/signup', LoginControllers.signup);
router.post('/signin', LoginControllers.signin);

export default router;