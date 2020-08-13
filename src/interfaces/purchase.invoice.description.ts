import { Timestamp } from "typeorm";

export interface IPurchaseInvoiceDescription {
    id: number,
    id_supplier_invoice: number,
    id_items: number,
    quantity: number,
    createdAt: Timestamp,
    updatedAt: Timestamp
}