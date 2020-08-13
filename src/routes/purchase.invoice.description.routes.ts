import { Router } from 'express';
import { PurchaseInvoiceDescriptionControllers } from '../controllers/purchase.invoice.description.controllers';

const router = Router();

router.get('/purchase/invoice/description/:supplierInvoiceId', PurchaseInvoiceDescriptionControllers.readInvoiceDescription);

export default router;