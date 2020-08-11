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
exports.Items = void 0;
const typeorm_1 = require("typeorm");
const sale_invoice_description_entity_1 = require("./sale.invoice.description.entity");
const purchase_invoice_description_entity_1 = require("./purchase.invoice.description.entity");
let Items = class Items extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Items.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Items.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Items.prototype, "stock", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Items.prototype, "barcode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Items.prototype, "salePrice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Items.prototype, "purchasePrice", void 0);
__decorate([
    typeorm_1.OneToMany(type => sale_invoice_description_entity_1.SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.items),
    __metadata("design:type", Array)
], Items.prototype, "saleInvoiceDescription", void 0);
__decorate([
    typeorm_1.OneToMany(type => purchase_invoice_description_entity_1.PurchaseInvoiceDescription, purchaseInvoiceDescription => purchaseInvoiceDescription.items),
    __metadata("design:type", Array)
], Items.prototype, "purchaseInvoiceDescription", void 0);
Items = __decorate([
    typeorm_1.Entity()
], Items);
exports.Items = Items;
