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
exports.SupplierInvoiceService = void 0;
const supplier_invoice_entity_1 = require("../entity/supplier.invoice.entity");
// *CRU -D*
class SupplierInvoiceService {
    constructor(req) {
        this.supplierInvoice = supplier_invoice_entity_1.SupplierInvoice;
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.supplierInvoice.create(this.requestBody);
            const saveData = yield this.supplierInvoice.save(data);
            return saveData;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.supplierInvoice.findOne({ id: this.requestParam.id });
            if (!result) {
                return `no existe la factura ${this.requestParam.id}`;
            }
            return result;
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.supplierInvoice.find();
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.supplierInvoice.findOne({ id: this.requestParam.id });
            if (!result) {
                return `no existe la factura ${this.requestParam.id}`;
            }
            const update = this.supplierInvoice.merge(result, this.requestBody);
            const saveUpdate = yield this.supplierInvoice.save(update);
            return saveUpdate;
        });
    }
}
exports.SupplierInvoiceService = SupplierInvoiceService;
