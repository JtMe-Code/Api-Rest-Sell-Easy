import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from 'typeorm';
import { Customer } from './customer.entity';
import { Supplier } from './supplier.entity';

@Entity()
export class TypeIdentification extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(type => Customer, customer => customer.typeIdentification)
    customer: Customer[];

    @OneToMany(type => Supplier, supplier => supplier.typeIdentification)
    supplier: Supplier[];

}