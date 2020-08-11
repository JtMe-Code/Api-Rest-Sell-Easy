"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expense_controllers_1 = require("../controllers/expense.controllers");
const router = express_1.Router();
router.post('/expense', expense_controllers_1.ExpenseControllers.create);
router.get('/expense/:id', expense_controllers_1.ExpenseControllers.read);
router.get('/expense/all', expense_controllers_1.ExpenseControllers.readAll);
router.put('/expense/:id', expense_controllers_1.ExpenseControllers.update);
exports.default = router;
