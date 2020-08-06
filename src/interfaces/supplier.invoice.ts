import { Supplier } from '../entity/supplier.entity';

export interface ISupplierInvoice {
    id: number,
    supplier: Supplier,
    dateCreation: Date
}