import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {CustomerInvoices} from './customer.invoices.entity';
import {Items} from './items.entity';

@Entity()
export class SaleInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => CustomerInvoices)
    @JoinColumn()
    id_invoice: CustomerInvoices;

    @OneToOne(type => Items)
    @JoinColumn()
    id_item: Items;

    @Column()
    quantity: number;

}