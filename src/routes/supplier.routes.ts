import { Router } from 'express';
import { SupplierControllers } from '../controllers/supplier.controllers';

const ROUTER = Router();

ROUTER.post('/supplier', SupplierControllers.create);
ROUTER.get('/supplier/:id', SupplierControllers.read);
ROUTER.get('/supplier/list/all', SupplierControllers.readAll);
ROUTER.put('/supplier/:id', SupplierControllers.update);
ROUTER.get('/supplier/search/:search', SupplierControllers.search);

export default ROUTER;