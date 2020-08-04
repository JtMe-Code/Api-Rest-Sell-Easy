import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {SupplierInvoice} from './supplier.invoices.entity';

@Entity()
export class PurchasesInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => SupplierInvoice)
    @JoinColumn()
    id_invoice: SupplierInvoice;

    @Column()
    id_item: number;

    @Column()
    quantity: number;

}