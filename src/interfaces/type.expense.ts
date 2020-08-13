import { Timestamp } from "typeorm";

export interface ITypeExpense {
    id: number,
    description: string,
    createdAt: Timestamp,
    updatedAt: Timestamp
}