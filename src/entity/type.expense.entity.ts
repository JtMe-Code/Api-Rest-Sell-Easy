import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { Expense } from './expense.entity';

@Entity()
export class TypeExpense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @OneToMany(type => Expense, expense => expense.typeExpense)
    expense: Expense[];

}