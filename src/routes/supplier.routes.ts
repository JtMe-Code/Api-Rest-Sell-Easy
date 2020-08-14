import { Router } from 'express';
import { SupplierControllers } from '../controllers/supplier.controllers';

const router = Router();

router.post('/supplier', SupplierControllers.create);
router.get('/supplier/:id', SupplierControllers.read);
router.get('/supplier_all', SupplierControllers.readAll);
router.put('/supplier/:id', SupplierControllers.update);

export default router;