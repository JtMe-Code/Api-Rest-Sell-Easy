import { TypeExpense } from '../entity/type.expense.entity';

export interface IExpense {
    id: number,
    typeExpense: TypeExpense,
    description: string,
    value: number
}