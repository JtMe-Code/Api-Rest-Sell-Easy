import { Router } from 'express';
import { SupplierInvoiceControllers } from '../controllers/supplier.invoice.controllers';

const ROUTER = Router();

ROUTER.post('/supplier/invoice', SupplierInvoiceControllers.create);
ROUTER.get('/supplier/invoice/:id', SupplierInvoiceControllers.read);
ROUTER.get('/supplier/invoice/list/all', SupplierInvoiceControllers.readAll);
ROUTER.put('/supplier/invoice/:id', SupplierInvoiceControllers.update);

export default ROUTER;