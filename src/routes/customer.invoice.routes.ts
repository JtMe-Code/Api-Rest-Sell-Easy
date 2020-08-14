import { Router } from 'express';
import { CustomerInvoiceControllers } from '../controllers/customer.invoice.controllers';

const router = Router();

router.post('/customer/invoice', CustomerInvoiceControllers.create);
router.get('/customer/invoice/:id', CustomerInvoiceControllers.read);
router.get('/customer/invoice_all', CustomerInvoiceControllers.readAll);
router.put('/customer/invoice/:id', CustomerInvoiceControllers.update);

export default router;