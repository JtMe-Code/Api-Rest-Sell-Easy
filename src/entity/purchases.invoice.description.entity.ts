import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import {SupplierInvoice} from './supplier.invoices.entity';
import {Items} from './items.entity';

@Entity()
export class PurchasesInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => SupplierInvoice, supplierInvoice => supplierInvoice.id)
    supplierInvoice: SupplierInvoice;

    @ManyToMany(type => Items)
    @JoinTable()
    items: Items[];

    @Column()
    quantity: number;

}