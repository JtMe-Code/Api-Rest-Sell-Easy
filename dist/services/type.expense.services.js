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
exports.TypeExpenseService = void 0;
const type_expense_entity_1 = require("../entity/type.expense.entity");
// *CRU -D*
class TypeExpenseService {
    constructor(req) {
        this.typeExpense = type_expense_entity_1.TypeExpense;
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.typeExpense.find({ description: this.requestBody.description });
            if (result) {
                return `Ya un tipo de gasto ${this.requestBody.description}`;
            }
            const data = this.typeExpense.create(this.requestBody);
            const saveData = yield this.typeExpense.save(data);
            return saveData;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.typeExpense.findOne({ id: this.requestParam.id });
            if (!result) {
                return "no existe el cliente";
            }
            return result;
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.typeExpense.find();
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.typeExpense.findOne({ id: this.requestParam.id });
            if (!result) {
                return "no existe el cliente";
            }
            const update = this.typeExpense.merge(result, this.requestBody);
            const saveUpdate = yield this.typeExpense.save(update);
            return saveUpdate;
        });
    }
}
exports.TypeExpenseService = TypeExpenseService;
