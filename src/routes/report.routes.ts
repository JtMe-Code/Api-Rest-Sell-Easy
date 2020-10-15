import { Router } from 'express';
import { ReportControllers } from '../controllers/report.controllers';

const ROUTER = Router();

ROUTER.get('/report/customer/invoice', ReportControllers.customerInvoice);
ROUTER.get('/report/supplier/invoice', ReportControllers.supplierInvoice);
ROUTER.get('/report/expense', ReportControllers.expense);
ROUTER.get('/report/items', ReportControllers.items);

export default ROUTER;