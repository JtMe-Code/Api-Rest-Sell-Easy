import { Router } from 'express';
import { ExpenseControllers } from '../controllers/expense.controllers';

const ROUTER = Router();

ROUTER.post('/expense', ExpenseControllers.create);
ROUTER.get('/expense/:id', ExpenseControllers.read);
ROUTER.get('/expense/list/all', ExpenseControllers.readAll);
ROUTER.put('/expense/:id', ExpenseControllers.update);
ROUTER.get('/expense/search/:search', ExpenseControllers.search);

export default ROUTER;