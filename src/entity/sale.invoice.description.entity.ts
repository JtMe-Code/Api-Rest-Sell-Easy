import {Entity, Column, PrimaryGeneratedColumn, Tree, TreeParent} from 'typeorm';
import {CustomerInvoice} from './customer.invoice.entity';
import {Items} from './items.entity';

@Entity()
@Tree("materialized-path")
export class SaleInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @TreeParent()
    customerInvoice: CustomerInvoice;

    @TreeParent()
    items: Items;

    @Column()
    quantity: number;

}