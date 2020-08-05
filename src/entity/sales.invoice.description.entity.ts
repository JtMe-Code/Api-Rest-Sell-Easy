import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {CustomerInvoice} from './customer.invoices.entity';
import {Items} from './items.entity';

@Entity()
export class SaleInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => CustomerInvoice, customerInvoice => customerInvoice.saleInvoiceDescription)
    customerInvoice: CustomerInvoice;

    @ManyToOne(type => Items, items => items.saleInvoiceDescription)
    items: Items;

    @Column()
    quantity: number;

}