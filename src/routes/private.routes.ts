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


const router = Router();

router.use(passport.authenticate("jwt", { session: false }));

router.use(customerRoutes);
router.use(customerInvoiceRoutes);
router.use(expenseRoutes);
router.use(itemsRoutes);
router.use(purchaseInvoiceDescriptionRoutes);
router.use(saleInvoiceDescriptionRoutes);
router.use(supplierInvoiceRoutes);
router.use(supplierRoutes);
router.use(typeExpenseRoutes);
router.use(typeIdentificationRoutes);

export default router;