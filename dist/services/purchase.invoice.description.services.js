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
exports.PurchaseInvoiceDescriptionService = void 0;
const purchase_invoice_description_entity_1 = require("../entity/purchase.invoice.description.entity");
// *CRU -D*
class PurchaseInvoiceDescriptionService {
    constructor(req) {
        this.purchaseInvoiceDescription = purchase_invoice_description_entity_1.PurchaseInvoiceDescription;
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.purchaseInvoiceDescription.create(this.requestBody);
            const saveData = yield this.purchaseInvoiceDescription.save(data);
            return saveData;
        });
    }
    readInvoiceDescription() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.purchaseInvoiceDescription.find({ supplierInvoice: this.requestParam.supplierInvoiceId });
            return result;
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.purchaseInvoiceDescription.find();
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
}
exports.PurchaseInvoiceDescriptionService = PurchaseInvoiceDescriptionService;
