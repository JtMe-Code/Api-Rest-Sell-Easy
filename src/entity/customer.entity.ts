import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {TypeIdentification} from './type.identification.entity';
import { CustomerInvoice } from './customer.invoice.entity';

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    id_type_identification: number;
    @ManyToOne(type => TypeIdentification, typeIdentification => typeIdentification.customer)
    @JoinColumn({name: "id_type_identification"})
    typeIdentification: TypeIdentification;

    @Column()
    identification: string;

    @OneToMany(type => CustomerInvoice, customerInvoice => customerInvoice.customer)
    customerInvoice: CustomerInvoice[];
    
}