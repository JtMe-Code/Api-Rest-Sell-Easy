import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {SupplierInvoice} from './supplier.invoices.entity';
import {Items} from './items.entity';

@Entity()
export class PurchasesInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => SupplierInvoice)
    @JoinColumn()
    id_invoice: SupplierInvoice;

    @OneToOne(type => Items)
    @JoinColumn()
    id_item: Items;

    @Column()
    quantity: number;

}