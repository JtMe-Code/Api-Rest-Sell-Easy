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
exports.SupplierInvoice = void 0;
const typeorm_1 = require("typeorm");
const supplier_entity_1 = require("./supplier.entity");
const purchase_invoice_description_entity_1 = require("./purchase.invoice.description.entity");
let SupplierInvoice = class SupplierInvoice extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SupplierInvoice.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SupplierInvoice.prototype, "id_supplier", void 0);
__decorate([
    typeorm_1.ManyToOne(type => supplier_entity_1.Supplier, supplier => supplier.supplierInvoice),
    typeorm_1.JoinColumn({ name: "id_supplier" }),
    __metadata("design:type", supplier_entity_1.Supplier)
], SupplierInvoice.prototype, "supplier", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], SupplierInvoice.prototype, "dateCreation", void 0);
__decorate([
    typeorm_1.OneToMany(type => purchase_invoice_description_entity_1.PurchaseInvoiceDescription, purchaseInvoiceDescription => purchaseInvoiceDescription.supplierInvoice),
    __metadata("design:type", Array)
], SupplierInvoice.prototype, "purchaseInvoiceDescription", void 0);
SupplierInvoice = __decorate([
    typeorm_1.Entity()
], SupplierInvoice);
exports.SupplierInvoice = SupplierInvoice;
