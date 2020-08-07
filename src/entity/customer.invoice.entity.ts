import {Entity, Column, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent} from 'typeorm';
import {Customer} from './customer.entity';
import { SaleInvoiceDescription } from './sale.invoice.description.entity';

@Entity()
@Tree("materialized-path")
export class CustomerInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @TreeParent()
    customer: Customer;

    @Column()
    dateCreation: Date;
    
    @TreeChildren()
    saleInvoiceDescription: SaleInvoiceDescription[];

}