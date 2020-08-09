import { Router } from 'express';
import { SupplierControllers } from '../controllers/supplier.controllers';

const router = Router();

router.post('/supplier', SupplierControllers.create);
router.post('/supplier/:id', SupplierControllers.read);
router.post('/supplier/all', SupplierControllers.readAll);
router.put('/supplier/:id', SupplierControllers.update);

export default router;