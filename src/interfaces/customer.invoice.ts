import { Timestamp } from "typeorm";

export interface ICustomerInvoice {
    id: number,
    id_customer: number,
    createdAt: Timestamp,
    updatedAt: Timestamp
}