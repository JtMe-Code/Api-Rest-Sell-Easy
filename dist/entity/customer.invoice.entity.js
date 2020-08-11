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
exports.CustomerInvoice = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer.entity");
const sale_invoice_description_entity_1 = require("./sale.invoice.description.entity");
let CustomerInvoice = class CustomerInvoice extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CustomerInvoice.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CustomerInvoice.prototype, "id_customer", void 0);
__decorate([
    typeorm_1.ManyToOne(type => customer_entity_1.Customer, customer => customer.customerInvoice),
    typeorm_1.JoinColumn({ name: "id_customer" }),
    __metadata("design:type", customer_entity_1.Customer)
], CustomerInvoice.prototype, "customer", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], CustomerInvoice.prototype, "dateCreation", void 0);
__decorate([
    typeorm_1.OneToMany(type => sale_invoice_description_entity_1.SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.customerInvoice),
    __metadata("design:type", Array)
], CustomerInvoice.prototype, "saleInvoiceDescription", void 0);
CustomerInvoice = __decorate([
    typeorm_1.Entity()
], CustomerInvoice);
exports.CustomerInvoice = CustomerInvoice;
