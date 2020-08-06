import { Items } from '../entity/items.entity';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';

export interface IPurchaseInvoiceDescription {
    id: number,
    supplierInvoice: SupplierInvoice,
    items: Items,
    quantity: number
}