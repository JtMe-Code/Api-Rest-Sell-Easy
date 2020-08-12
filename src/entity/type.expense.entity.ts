import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Expense } from './expense.entity';

@Entity()
export class TypeExpense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(type => Expense, expense => expense.typeExpense)
    expense: Expense[];

}