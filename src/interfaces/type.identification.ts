import { Timestamp } from "typeorm";

export interface ITypeIdentification {
    id: number,
    description: string,
    createdAt: Timestamp,
    updatedAt: Timestamp
}