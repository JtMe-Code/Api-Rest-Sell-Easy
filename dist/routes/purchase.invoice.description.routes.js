"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const purchase_invoice_description_controllers_1 = require("../controllers/purchase.invoice.description.controllers");
const router = express_1.Router();
router.post('/purchase/invoice/description', purchase_invoice_description_controllers_1.PurchaseInvoiceDescriptionControllers.create);
router.get('/purchase/invoice/description/:supplierInvoiceId', purchase_invoice_description_controllers_1.PurchaseInvoiceDescriptionControllers.readInvoiceDescription);
exports.default = router;
