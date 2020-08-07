import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {TypeExpense} from './type.expense.entity'

@Entity()
export class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => TypeExpense, typeExpense => typeExpense.expense)
    typeExpense: TypeExpense;

    @Column()
    description: string;

    @Column()
    value: number;

}