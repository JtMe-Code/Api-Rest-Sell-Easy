import { Router } from 'express';
import { LoginControllers } from '../controllers/login.controllers';

const ROUTER= Router();

ROUTER.post('/signup', LoginControllers.signup);
ROUTER.post('/signin', LoginControllers.signin);

export default ROUTER;