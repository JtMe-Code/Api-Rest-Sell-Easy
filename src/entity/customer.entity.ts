import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {TypeIdentification} from './type.identification.entity';
import {CustomerInvoices} from './customer.invoices.entity';

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => TypeIdentification)
    @JoinColumn()
    id_type_identification: TypeIdentification;

    @Column()
    identification: string;

    @OneToOne(type => CustomerInvoices, CustomerInvoices => CustomerInvoices.id_customer)
    id_customer_invoices: CustomerInvoices
}