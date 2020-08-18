import { Router } from 'express';
import passport from 'passport';
import customerRoutes from './customer.routes';
import customerInvoiceRoutes from './customer.invoice.routes';
import expenseRoutes from './expense.routes';
import itemsRoutes from './items.routes';
import purchaseInvoiceDescriptionRoutes from './purchase.invoice.description.routes';
import saleInvoiceDescriptionRoutes from './sale.invoice.description.routes';
import supplierInvoiceRoutes from './supplier.invoice.routes';
import supplierRoutes from './supplier.routes';
import typeExpenseRoutes from './type.expense.routes';
import typeIdentificationRoutes from './type.identification.routes';


const ROUTER = Router();

ROUTER.use(passport.authenticate("jwt", { session: false }));

ROUTER.use(customerRoutes);
ROUTER.use(customerInvoiceRoutes);
ROUTER.use(expenseRoutes);
ROUTER.use(itemsRoutes);
ROUTER.use(purchaseInvoiceDescriptionRoutes);
ROUTER.use(saleInvoiceDescriptionRoutes);
ROUTER.use(supplierInvoiceRoutes);
ROUTER.use(supplierRoutes);
ROUTER.use(typeExpenseRoutes);
ROUTER.use(typeIdentificationRoutes);

export default ROUTER;