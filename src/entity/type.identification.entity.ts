import {Entity, PrimaryGeneratedColumn, Column, Tree, TreeChildren} from 'typeorm';
import { Customer } from './customer.entity';
import { Supplier } from './supplier.entity';

@Entity()
@Tree("materialized-path")
export class TypeIdentification {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @TreeChildren()
    customer: Customer[];

    @TreeChildren()
    supplier: Supplier[];

}