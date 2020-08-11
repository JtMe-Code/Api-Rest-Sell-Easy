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
exports.Supplier = void 0;
const typeorm_1 = require("typeorm");
const type_identification_entity_1 = require("./type.identification.entity");
const supplier_invoice_entity_1 = require("./supplier.invoice.entity");
let Supplier = class Supplier extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Supplier.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Supplier.prototype, "id_type_identification", void 0);
__decorate([
    typeorm_1.ManyToOne(type => type_identification_entity_1.TypeIdentification, typeIdentification => typeIdentification.supplier),
    typeorm_1.JoinColumn({ name: "id_type_identification" }),
    __metadata("design:type", type_identification_entity_1.TypeIdentification)
], Supplier.prototype, "typeIdentification", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Supplier.prototype, "identification", void 0);
__decorate([
    typeorm_1.OneToMany(type => supplier_invoice_entity_1.SupplierInvoice, supplierInvoice => supplierInvoice.supplier),
    __metadata("design:type", Array)
], Supplier.prototype, "supplierInvoice", void 0);
Supplier = __decorate([
    typeorm_1.Entity()
], Supplier);
exports.Supplier = Supplier;
