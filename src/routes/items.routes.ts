import { Router } from 'express';
import { ItemsControllers } from '../controllers/items.controllers';

const router = Router();

router.post('/items', ItemsControllers.create);
router.get('/items/:id', ItemsControllers.read);
router.get('/items_all', ItemsControllers.readAll);
router.put('/items/:id', ItemsControllers.update);

export default router;