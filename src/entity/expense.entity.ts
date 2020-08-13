import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import {TypeExpense} from './type.expense.entity'

@Entity()
export class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_type_expense: number;
    @ManyToOne(type => TypeExpense, typeExpense => typeExpense.expense, {eager: true})
    @JoinColumn({name: "id_type_expense"})
    typeExpense: TypeExpense;

    @Column()
    description: string;

    @Column()
    value: number;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

}