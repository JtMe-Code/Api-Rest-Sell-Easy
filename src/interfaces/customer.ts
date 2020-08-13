import { Timestamp } from "typeorm";

export interface ICustomer {
    id: number,
    name: string,
    id_type_identification: number,
    identification: string,
    createdAt: Timestamp,
    updatedAt: Timestamp
}