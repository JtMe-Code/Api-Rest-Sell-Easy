import { Router } from "express";
import passport from "passport";
import customerRoutes from './customer.routes'

const router = Router();

router.use(passport.authenticate("jwt", { session: false }));

router.use(customerRoutes);

export default router;