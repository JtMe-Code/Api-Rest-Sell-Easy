import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {TypeIdentification} from './type.identification.entity';
import { CustomerInvoices } from "./customer.invoices.entity";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => TypeIdentification, type_identification => type_identification.customer)
    type_identification: TypeIdentification;

    @Column()
    identification: string;

    @OneToMany(type => CustomerInvoices, customerInvoice => customerInvoice.customer)
    customerInvoice: CustomerInvoices[];
}