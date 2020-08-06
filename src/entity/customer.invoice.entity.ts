import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {Customer} from './customer.entity';
import { SaleInvoiceDescription } from './sale.invoice.description.entity';

@Entity()
export class CustomerInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Customer, customer => customer.customerInvoice)
    customer: Customer;

    @Column()
    dateCreation: Date;
    
    @OneToMany(type => SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.customerInvoice)
    saleInvoiceDescription: SaleInvoiceDescription[];

}