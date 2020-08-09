import { Router } from 'express';
import { TypeExpenseControllers } from '../controllers/type.expense.controllers';

const router = Router();

router.post('/type/expense', TypeExpenseControllers.create);
router.post('/type/expense/:id', TypeExpenseControllers.read);
router.post('/type/expense/all', TypeExpenseControllers.readAll);
router.put('/type/expense/:id', TypeExpenseControllers.update);

export default router;