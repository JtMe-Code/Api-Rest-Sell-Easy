import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {TypeIdentification} from './type.identification.entity';
import {CustomerInvoices} from './customer.invoices.entity';

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => TypeIdentification, type_identification => type_identification.customer)
    @JoinColumn()
    type_identification: TypeIdentification;

    @Column()
    identification: string;
}