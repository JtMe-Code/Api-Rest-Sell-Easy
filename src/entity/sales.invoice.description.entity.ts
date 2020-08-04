import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {CustomerInvoices} from './customer.invoices.entity';

@Entity()
export class SaleInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => CustomerInvoices)
    @JoinColumn()
    id_invoice: CustomerInvoices;

    @Column()
    id_item: number;

    @Column()
    quantity: number;

}