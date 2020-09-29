import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, Timestamp, UpdateDateColumn, Index} from 'typeorm';
import {Customer} from './customer.entity';
import { SaleInvoiceDescription } from './sale.invoice.description.entity';

@Entity()
export class CustomerInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    id_customer: number;
    @ManyToOne(type => Customer, customer => customer.customerInvoice, {eager: true})
    @JoinColumn({name: "id_customer"})
    customer: Customer;

    @Column("double")
    totalValue: number;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
    
    @OneToMany(type => SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.customerInvoice, {cascade: true})
    saleInvoiceDescription: SaleInvoiceDescription[];

}