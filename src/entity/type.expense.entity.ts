import {Entity, PrimaryGeneratedColumn, Column, Tree, TreeChildren} from 'typeorm';
import { Expense } from './expense.entity';

@Entity()
@Tree("materialized-path")
export class TypeExpense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @TreeChildren()
    expense: Expense[];

}