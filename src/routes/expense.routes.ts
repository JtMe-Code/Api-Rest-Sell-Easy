import { Router } from 'express';
import { ExpenseControllers } from '../controllers/expense.controllers';

const router = Router();

router.post('/expense', ExpenseControllers.create);
router.post('/expense/:id', ExpenseControllers.read);
router.post('/expense/all', ExpenseControllers.readAll);
router.put('/expense/:id', ExpenseControllers.update);

export default router;