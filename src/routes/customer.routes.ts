import { Router } from 'express';
import { CustomerControllers } from '../controllers/customer.controllers';

const ROUTER = Router();

ROUTER.post('/customer', CustomerControllers.create);
ROUTER.get('/customer/:id', CustomerControllers.read);
ROUTER.get('/customer/list/all', CustomerControllers.readAll);
ROUTER.put('/customer/:id', CustomerControllers.update);
ROUTER.get('/customer/search/:search', CustomerControllers.search);

export default ROUTER;