import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { Customer } from './customer.entity';
import { Supplier } from './supplier.entity';

@Entity()
export class TypeIdentification {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @OneToMany(type => Customer, customer => customer.typeIdentification)
    customer: Customer[];

    @OneToMany(type => Supplier, supplier => supplier.typeIdentification)
    supplier: Supplier[];

}