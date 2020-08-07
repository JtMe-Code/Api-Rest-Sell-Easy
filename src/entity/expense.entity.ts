import {Entity, Column, PrimaryGeneratedColumn, Tree, TreeParent} from 'typeorm';
import {TypeExpense} from './type.expense.entity'

@Entity()
@Tree("materialized-path")
export class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @TreeParent()
    typeExpense: TypeExpense;

    @Column()
    description: string;

    @Column()
    value: number;

}