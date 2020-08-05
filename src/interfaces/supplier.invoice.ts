import { Supplier } from '../entity/supplier.entity';

export interface ISupplierInvoce {
    id: number,
    supplier: Supplier,
    dateCreation: Date
}