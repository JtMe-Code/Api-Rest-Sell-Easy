import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Customer} from './customer.entity';

@Entity()
export class CustomerInvoices {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Customer, id_customer => id_customer.id_customer_invoices)
    @JoinColumn()
    id_customer: Customer;

    @Column()
    date_creation: string;    

}