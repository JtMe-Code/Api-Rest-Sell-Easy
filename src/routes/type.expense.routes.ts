import { Router } from 'express';
import { TypeExpenseControllers } from '../controllers/type.expense.controllers';

const router = Router();

router.post('/type/expense', TypeExpenseControllers.create);
router.get('/type/expense/:id', TypeExpenseControllers.read);
router.get('/type/expense_all', TypeExpenseControllers.readAll);
router.put('/type/expense/:id', TypeExpenseControllers.update);

export default router;