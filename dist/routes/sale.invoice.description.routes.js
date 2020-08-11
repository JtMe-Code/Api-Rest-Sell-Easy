"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sale_invoice_description_controllers_1 = require("../controllers/sale.invoice.description.controllers");
const router = express_1.Router();
router.post('/sale/invoice/description', sale_invoice_description_controllers_1.SaleInvoiceDescriptionControllers.create);
router.get('/sale/invoice/description/:customerInvoiceId', sale_invoice_description_controllers_1.SaleInvoiceDescriptionControllers.readInvoiceDescription);
exports.default = router;
