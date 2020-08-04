import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {TypeExpenses} from './type.expenses.entity'

@Entity()
export class Expenses {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => TypeExpenses)
    @JoinColumn()
    id_type_expenses: TypeExpenses;

    @Column()
    description: string;

    @Column()
    id_item: number;

    @Column()
    quantity: number;

    @Column()
    value: number;

}