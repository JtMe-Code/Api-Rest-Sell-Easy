import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {SupplierInvoice} from './supplier.invoice.entity';
import {Items} from './items.entity';

@Entity()
export class PurchaseInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => SupplierInvoice, supplierInvoice => supplierInvoice.purchaseInvoiceDescription)
    supplierInvoice: SupplierInvoice;

    @ManyToOne(type => Items, items => items.purchaseInvoiceDescription)
    items: Items;

    @Column()
    quantity: number;

}