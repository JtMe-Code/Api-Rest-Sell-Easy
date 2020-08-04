import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Customer} from './customer.entity';

@Entity()
export class CustomerInvoices {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Customer)
    @JoinColumn()
    id_customer: Customer;

    @Column()
    date_creation: string;    

}