import { Router } from 'express';
import { PurchaseInvoiceDescriptionControllers } from '../controllers/purchase.invoice.description.controllers';

const ROUTER = Router();

ROUTER.get('/purchase/invoice/description/:id', PurchaseInvoiceDescriptionControllers.readInvoiceDescription);

export default ROUTER;