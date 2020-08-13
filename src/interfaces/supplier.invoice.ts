import { Timestamp } from "typeorm";

export interface ISupplierInvoice {
    id: number,
    id_supplier: number,
    createdAt: Timestamp,
    updatedAt: Timestamp
}