import { Router } from 'express';
import { TypeExpenseControllers } from '../controllers/type.expense.controllers';

const ROUTER = Router();

ROUTER.post('/type/expense', TypeExpenseControllers.create);
ROUTER.get('/type/expense/:id', TypeExpenseControllers.read);
ROUTER.get('/type/expense/list/all', TypeExpenseControllers.readAll);
ROUTER.put('/type/expense/:id', TypeExpenseControllers.update);

export default ROUTER;