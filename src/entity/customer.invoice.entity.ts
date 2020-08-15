import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, Timestamp, UpdateDateColumn} from 'typeorm';
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

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
    
    @OneToMany(type => SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.customerInvoice, {cascade: true})
    saleInvoiceDescription: SaleInvoiceDescription[];

}