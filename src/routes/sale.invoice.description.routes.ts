import { Router } from 'express';
import { SaleInvoiceDescriptionControllers } from '../controllers/sale.invoice.description.controllers';

const router = Router();

router.post('/sale/invoice/description', SaleInvoiceDescriptionControllers.create);
router.post('/sale/invoice/description/:customerInvoiceId', SaleInvoiceDescriptionControllers.readInvoiceDescription);

export default router;