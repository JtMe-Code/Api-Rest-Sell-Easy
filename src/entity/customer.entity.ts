import {Entity, Column, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent} from 'typeorm';
import {TypeIdentification} from './type.identification.entity';
import { CustomerInvoice } from './customer.invoice.entity';

@Entity()
@Tree("materialized-path")
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @TreeParent()
    typeIdentification: TypeIdentification;

    @Column()
    identification: string;

    @TreeChildren()
    customerInvoice: CustomerInvoice[];
    
}