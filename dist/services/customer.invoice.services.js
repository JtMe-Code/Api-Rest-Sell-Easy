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
exports.CustomerInvoiceService = void 0;
const customer_invoice_entity_1 = require("../entity/customer.invoice.entity");
// *CRU -D*
class CustomerInvoiceService {
    constructor(req) {
        this.customerInvoice = customer_invoice_entity_1.CustomerInvoice;
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.customerInvoice.create(this.requestBody);
            const saveData = yield this.customerInvoice.save(data);
            return saveData;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.customerInvoice.findOne({ id: this.requestParam.id });
            if (!result) {
                return "no existe la factura";
            }
            return result;
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.customerInvoice.find();
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.customerInvoice.findOne({ id: this.requestParam.id });
            if (!result) {
                return "no existe la factura";
            }
            const update = this.customerInvoice.merge(result, this.requestBody);
            const saveUpdate = yield this.customerInvoice.save(update);
            return saveUpdate;
        });
    }
}
exports.CustomerInvoiceService = CustomerInvoiceService;
