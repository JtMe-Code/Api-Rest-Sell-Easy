"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
const typeorm_1 = require("typeorm");
const type_expense_entity_1 = require("./type.expense.entity");
let Expense = class Expense extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Expense.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Expense.prototype, "id_type_expense", void 0);
__decorate([
    typeorm_1.ManyToOne(type => type_expense_entity_1.TypeExpense, typeExpense => typeExpense.expense),
    typeorm_1.JoinColumn({ name: "id_type_expense" }),
    __metadata("design:type", type_expense_entity_1.TypeExpense)
], Expense.prototype, "typeExpense", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Expense.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Expense.prototype, "value", void 0);
Expense = __decorate([
    typeorm_1.Entity()
], Expense);
exports.Expense = Expense;
