import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {Customer} from './customer.entity';
import { SaleInvoiceDescription } from './sale.invoice.description.entity';

@Entity()
export class CustomerInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_customer: number;
    @ManyToOne(type => Customer, customer => customer.customerInvoice)
    @JoinColumn({name: "id_customer"})
    customer: Customer;

    @Column()
    date_creation: Date;
    
    @OneToMany(type => SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.customerInvoice)
    saleInvoiceDescription: SaleInvoiceDescription[];

}