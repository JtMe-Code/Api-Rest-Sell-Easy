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
exports.SaleInvoiceDescription = void 0;
const typeorm_1 = require("typeorm");
const customer_invoice_entity_1 = require("./customer.invoice.entity");
const items_entity_1 = require("./items.entity");
let SaleInvoiceDescription = class SaleInvoiceDescription extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SaleInvoiceDescription.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SaleInvoiceDescription.prototype, "id_customer_invoice", void 0);
__decorate([
    typeorm_1.ManyToOne(type => customer_invoice_entity_1.CustomerInvoice, customerInvoice => customerInvoice.saleInvoiceDescription),
    typeorm_1.JoinColumn({ name: "id_customer_invoice" }),
    __metadata("design:type", customer_invoice_entity_1.CustomerInvoice)
], SaleInvoiceDescription.prototype, "customerInvoice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SaleInvoiceDescription.prototype, "id_items", void 0);
__decorate([
    typeorm_1.ManyToOne(type => items_entity_1.Items, items => items.saleInvoiceDescription),
    typeorm_1.JoinColumn({ name: "id_items" }),
    __metadata("design:type", items_entity_1.Items)
], SaleInvoiceDescription.prototype, "items", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SaleInvoiceDescription.prototype, "quantity", void 0);
SaleInvoiceDescription = __decorate([
    typeorm_1.Entity()
], SaleInvoiceDescription);
exports.SaleInvoiceDescription = SaleInvoiceDescription;
