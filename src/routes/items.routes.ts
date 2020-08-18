import { Router } from 'express';
import { ItemsControllers } from '../controllers/items.controllers';

const ROUTER = Router();

ROUTER.post('/items', ItemsControllers.create);
ROUTER.get('/items/:id', ItemsControllers.read);
ROUTER.get('/items/list/all', ItemsControllers.readAll);
ROUTER.put('/items/:id', ItemsControllers.update);

export default ROUTER;