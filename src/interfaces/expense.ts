import { TypeExpense } from '../entity/type.expense.entity';

export interface IExpense {
    id: number,
    typeExpense: TypeExpense,
    description: string,
    items: number,
    quantity: number,
    value: number
}