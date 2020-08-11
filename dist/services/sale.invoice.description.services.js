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
exports.SaleInvoiceDescriptionService = void 0;
const sale_invoice_description_entity_1 = require("../entity/sale.invoice.description.entity");
// *CRU -D*
class SaleInvoiceDescriptionService {
    constructor(req) {
        this.saleInvoiceDescription = sale_invoice_description_entity_1.SaleInvoiceDescription;
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.saleInvoiceDescription.create(this.requestBody);
            const saveData = yield this.saleInvoiceDescription.save(data);
            return saveData;
        });
    }
    readInvoiceDescription() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.saleInvoiceDescription.find({ customerInvoice: this.requestParam.customerInvoiceId });
            return result;
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.saleInvoiceDescription.find();
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
}
exports.SaleInvoiceDescriptionService = SaleInvoiceDescriptionService;
