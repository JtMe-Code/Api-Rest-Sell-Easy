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
exports.PurchaseInvoiceDescription = void 0;
const typeorm_1 = require("typeorm");
const supplier_invoice_entity_1 = require("./supplier.invoice.entity");
const items_entity_1 = require("./items.entity");
let PurchaseInvoiceDescription = class PurchaseInvoiceDescription extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PurchaseInvoiceDescription.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PurchaseInvoiceDescription.prototype, "id_supplier_invoice", void 0);
__decorate([
    typeorm_1.ManyToOne(type => supplier_invoice_entity_1.SupplierInvoice, supplierInvoice => supplierInvoice.purchaseInvoiceDescription),
    typeorm_1.JoinColumn({ name: "id_supplier_invoice" }),
    __metadata("design:type", supplier_invoice_entity_1.SupplierInvoice)
], PurchaseInvoiceDescription.prototype, "supplierInvoice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PurchaseInvoiceDescription.prototype, "id_items", void 0);
__decorate([
    typeorm_1.ManyToOne(type => items_entity_1.Items, items => items.purchaseInvoiceDescription),
    typeorm_1.JoinColumn({ name: "id_items" }),
    __metadata("design:type", items_entity_1.Items)
], PurchaseInvoiceDescription.prototype, "items", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PurchaseInvoiceDescription.prototype, "quantity", void 0);
PurchaseInvoiceDescription = __decorate([
    typeorm_1.Entity()
], PurchaseInvoiceDescription);
exports.PurchaseInvoiceDescription = PurchaseInvoiceDescription;
