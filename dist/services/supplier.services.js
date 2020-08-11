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
exports.SupplierService = void 0;
const supplier_entity_1 = require("../entity/supplier.entity");
// *CRU -D*
class SupplierService {
    constructor(req) {
        this.customer = supplier_entity_1.Supplier;
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.customer.find({
                where: { typeIdentification: this.requestBody.id_type_identification, identification: this.requestBody.identification }
            });
            if (result) {
                return `Ya existe un proveedor con ${this.requestBody.id_type_identification} ${this.requestBody.identification}`;
            }
            const data = this.customer.create(this.requestBody);
            const saveData = yield this.customer.save(data);
            return saveData;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.customer.findOne({ id: this.requestParam.id });
            if (!result) {
                return "no existe el proveedor";
            }
            return result;
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.customer.find();
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.customer.findOne({ id: this.requestParam.id });
            if (!result) {
                return "no existe el proveedor";
            }
            const update = this.customer.merge(result, this.requestBody);
            const saveUpdate = yield this.customer.save(update);
            return saveUpdate;
        });
    }
}
exports.SupplierService = SupplierService;
