import { Timestamp } from "typeorm";

export interface ISaleInvoiceDescription{
    id: number,
    id_customer_invoice: number,
    id_items: number,
    quantity: number,
    createdAt: Timestamp,
    updatedAt: Timestamp
}