import { Router } from 'express';
import { PurchaseInvoiceDescriptionControllers } from '../controllers/purchase.invoice.description.controllers';

const ROUTER = Router();

ROUTER.get('/purchase/invoice/description/:supplierInvoiceId', PurchaseInvoiceDescriptionControllers.readInvoiceDescription);

export default ROUTER;