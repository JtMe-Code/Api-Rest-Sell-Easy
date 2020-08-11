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
exports.TypeIdentification = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer.entity");
const supplier_entity_1 = require("./supplier.entity");
let TypeIdentification = class TypeIdentification extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TypeIdentification.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TypeIdentification.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => customer_entity_1.Customer, customer => customer.typeIdentification),
    __metadata("design:type", Array)
], TypeIdentification.prototype, "customer", void 0);
__decorate([
    typeorm_1.OneToMany(type => supplier_entity_1.Supplier, supplier => supplier.typeIdentification),
    __metadata("design:type", Array)
], TypeIdentification.prototype, "supplier", void 0);
TypeIdentification = __decorate([
    typeorm_1.Entity()
], TypeIdentification);
exports.TypeIdentification = TypeIdentification;
