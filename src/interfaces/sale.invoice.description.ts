import { Items } from '../entity/items.entity';
import { CustomerInvoice } from '../entity/customer.invoice.entity';

export interface ISaleInvoiceDescription{
    id: number,
    customerInvoice: CustomerInvoice,
    items: Items,
    quantity: number
}