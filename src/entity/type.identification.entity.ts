import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Customer } from "./customer.entity";
import { Supplier } from "./supplier.entity";

@Entity()
export class TypeIdentification {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(type => Customer, customer => customer.type_identification)
    customer: Customer[];

    @OneToMany(type => Supplier, supplier => supplier.type_identification)
    supplier: Supplier[];

}