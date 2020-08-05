import { Router } from 'express';
import { CustomerControllers } from '../controllers/customer.controllers';

const router = Router();

router.post('/customer', CustomerControllers.create);
router.post('/customer/:id', CustomerControllers.read);
router.post('/customer/all', CustomerControllers.readAll);
router.put('/customer/:id', CustomerControllers.update);

export default router;