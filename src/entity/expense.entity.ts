import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, Timestamp, UpdateDateColumn, Index} from 'typeorm';
import {TypeExpense} from './type.expense.entity'

@Entity()
export class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    id_type_expense: number;
    @ManyToOne(type => TypeExpense, typeExpense => typeExpense.expense, {eager: true})
    @JoinColumn({name: "id_type_expense"})
    typeExpense: TypeExpense;

    @Column()
    @Index()
    description: string;

    @Column()
    value: number;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

}