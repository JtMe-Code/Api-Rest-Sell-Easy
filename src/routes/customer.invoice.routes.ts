import { Router } from 'express';
import { CustomerInvoiceControllers } from '../controllers/customer.invoice.controllers';

const ROUTER = Router();

ROUTER.post('/customer/invoice', CustomerInvoiceControllers.create);
ROUTER.get('/customer/invoice/:id', CustomerInvoiceControllers.read);
ROUTER.get('/customer/invoice/list/all', CustomerInvoiceControllers.readAll);
ROUTER.put('/customer/invoice/:id', CustomerInvoiceControllers.update);
ROUTER.get('/customer/invoice/search/:search', CustomerInvoiceControllers.search);

export default ROUTER;