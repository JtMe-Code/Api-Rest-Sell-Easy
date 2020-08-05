import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {TypeExpenses} from './type.expenses.entity'

@Entity()
export class Expenses {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => TypeExpenses, type_expenses => type_expenses.id)
    type_expenses: TypeExpenses;

    @Column()
    description: string;

    @Column()
    item: number;

    @Column()
    quantity: number;

    @Column()
    value: number;

}