import { Router } from 'express';
import { ExpenseControllers } from '../controllers/expense.controllers';

const router = Router();

router.post('/expense', ExpenseControllers.create);
router.get('/expense/:id', ExpenseControllers.read);
router.get('/expense/all', ExpenseControllers.readAll);
router.put('/expense/:id', ExpenseControllers.update);

export default router;