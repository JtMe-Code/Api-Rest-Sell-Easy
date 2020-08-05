import { Items } from '../entity/items.entity';

export interface IPurchaseInvoiceDescription {
    id: number,
    supplierInvoice: number,
    items: Items,
    quantity: number
}