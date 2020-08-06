import { Router } from 'express';
import passport from 'passport';
import customerRoutes from './customer.routes';
import customerInvoiceRoutes from './customer.invoice.routes';

const router = Router();

router.use(passport.authenticate("jwt", { session: false }));

router.use(customerRoutes);
router.use(customerInvoiceRoutes);

export default router;