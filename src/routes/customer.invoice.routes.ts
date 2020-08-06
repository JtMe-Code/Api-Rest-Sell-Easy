import { Router } from 'express';
import { CustomerInvoiceControllers } from '../controllers/customer.invoice.controllers';

const router = Router();

router.post('/customer/invoice', CustomerInvoiceControllers.create);
router.post('/customer/invoice/:id', CustomerInvoiceControllers.read);
router.post('/customer/invoice/all', CustomerInvoiceControllers.readAll);
router.put('/customer/invoice/:id', CustomerInvoiceControllers.update);

export default router;