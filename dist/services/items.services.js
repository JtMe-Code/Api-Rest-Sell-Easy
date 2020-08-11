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
exports.ItemsService = void 0;
const typeorm_1 = require("typeorm");
const items_entity_1 = require("../entity/items.entity");
// *CRU -D*
class ItemsService {
    constructor(req) {
        this.items = items_entity_1.Items;
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.items.create(this.requestBody);
            const saveData = yield this.items.save(data);
            return saveData;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.items.findOne({ id: this.requestParam });
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
    readBarCode() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.items.find({ barcode: typeorm_1.Like(`%${this.requestBody.barcode}%`) });
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
    readDescription() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.items.find({ description: typeorm_1.Like(`%${this.requestBody.description}%`) });
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.items.find();
            if (!result) {
                return "sin resultados";
            }
            return result;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.items.findOne({ id: this.requestParam });
            if (!result) {
                return "items no encontrado";
            }
            const update = this.items.merge(result, this.requestBody);
            const saveUpdate = yield this.items.save(update);
            return saveUpdate;
        });
    }
}
exports.ItemsService = ItemsService;
