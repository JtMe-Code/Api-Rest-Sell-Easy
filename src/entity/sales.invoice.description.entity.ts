import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import {CustomerInvoices} from './customer.invoices.entity';
import {Items} from './items.entity';

@Entity()
export class SaleInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => CustomerInvoices, customerInvoices => customerInvoices.saleInvoiceDescription)
    customerInvoices: CustomerInvoices;

    @ManyToMany(type => Items)
    @JoinTable()
    items: Items[];

    @Column()
    quantity: number;

}