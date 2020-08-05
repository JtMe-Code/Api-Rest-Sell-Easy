import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Customer} from './customer.entity';

@Entity()
export class CustomerInvoices {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Customer, customer => customer.id)
    customer: Customer;

    @Column()
    date_creation: Date;    

}