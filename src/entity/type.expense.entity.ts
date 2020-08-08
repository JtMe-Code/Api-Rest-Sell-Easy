import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from 'typeorm';
import { Expense } from './expense.entity';

@Entity()
export class TypeExpense extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(type => Expense, expense => expense.typeExpense)
    expense: Expense[];

}