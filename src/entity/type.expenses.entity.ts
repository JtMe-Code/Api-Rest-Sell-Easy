import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Expenses } from "./expenses.entity";

@Entity()
export class TypeExpenses {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(type => Expenses, expenses => expenses.type_expenses)
    expenses: Expenses[];

}