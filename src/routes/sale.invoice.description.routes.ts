import { Router } from 'express';
import { SaleInvoiceDescriptionControllers } from '../controllers/sale.invoice.description.controllers';

const ROUTER = Router();

ROUTER.get('/sale/invoice/description/:customerInvoiceId', SaleInvoiceDescriptionControllers.readInvoiceDescription);

export default ROUTER;