"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseInvoiceDescriptionControllers = void 0;
const purchase_invoice_description_services_1 = require("../services/purchase.invoice.description.services");
exports.PurchaseInvoiceDescriptionControllers = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let outcome = yield new purchase_invoice_description_services_1.PurchaseInvoiceDescriptionService(req).create();
        if (typeof outcome === "string") {
            res.status(400).json({ error: outcome });
        }
        return res.status(200).json(outcome);
    }),
    readInvoiceDescription: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let outcome = yield new purchase_invoice_description_services_1.PurchaseInvoiceDescriptionService(req).readInvoiceDescription();
        if (typeof outcome === "string") {
            res.status(400).json({ error: outcome });
        }
        return res.status(200).json(outcome);
    }),
    readAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let outcome = yield new purchase_invoice_description_services_1.PurchaseInvoiceDescriptionService(req).readAll();
        if (typeof outcome === "string") {
            res.status(400).json({ error: outcome });
        }
        return res.status(200).json(outcome);
    })
};
