import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {TypeIdentification} from './type.identification.entity';
import { CustomerInvoice } from './customer.invoices.entity';

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => TypeIdentification, typeIdentification => typeIdentification.customer)
    typeIdentification: TypeIdentification;

    @Column()
    identification: string;

    @OneToMany(type => CustomerInvoice, customerInvoice => customerInvoice.customer)
    customerInvoice: CustomerInvoice[];
}