import { Router } from 'express';
import { SaleInvoiceDescriptionControllers } from '../controllers/sale.invoice.description.controllers';

const router = Router();

router.get('/sale/invoice/description/:customerInvoiceId', SaleInvoiceDescriptionControllers.readInvoiceDescription);

export default router;