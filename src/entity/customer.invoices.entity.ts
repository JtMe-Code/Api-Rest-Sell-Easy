import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {Customer} from './customer.entity';
import { SaleInvoiceDescription } from "./sales.invoice.description.entity";

@Entity()
export class CustomerInvoices {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Customer, customer => customer.customerInvoice)
    customer: Customer;

    @Column()
    date_creation: Date;
    
    @OneToMany(type => SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.customerInvoices)
    saleInvoiceDescription: SaleInvoiceDescription[];

}