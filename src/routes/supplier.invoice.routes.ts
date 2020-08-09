import { Router } from 'express';
import { SupplierInvoiceControllers } from '../controllers/supplier.invoice.controllers';

const router = Router();

router.post('/supplier/invoice', SupplierInvoiceControllers.create);
router.post('/supplier/invoice/:id', SupplierInvoiceControllers.read);
router.post('/supplier/invoice/all', SupplierInvoiceControllers.readAll);
router.put('/supplier/invoice/:id', SupplierInvoiceControllers.update);

export default router;