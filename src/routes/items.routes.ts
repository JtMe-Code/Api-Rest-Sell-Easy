import { Router } from 'express';
import { ItemsControllers } from '../controllers/items.controllers';

const router = Router();

router.post('/items', ItemsControllers.create);
router.post('/items/:id', ItemsControllers.read);
router.post('/items/all', ItemsControllers.readAll);
router.put('/items/:id', ItemsControllers.update);

export default router;