import { Timestamp } from "typeorm";

export interface IExpense {
    id: number,
    id_type_expense: number,
    description: string,
    value: number,
    createdAt: Timestamp,
    updatedAt: Timestamp
}