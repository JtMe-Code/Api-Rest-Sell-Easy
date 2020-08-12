import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import {TypeExpense} from './type.expense.entity'

@Entity()
export class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_type_expense: number;
    @ManyToOne(type => TypeExpense, typeExpense => typeExpense.expense)
    @JoinColumn({name: "id_type_expense"})
    typeExpense: TypeExpense;

    @Column()
    description: string;

    @Column()
    value: number;

}