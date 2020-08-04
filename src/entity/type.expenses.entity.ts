import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Customer } from "./customer.entity";

@Entity()
export class TypeExpenses {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(type => Customer, customer => customer.)
    customer: Customer[];

}