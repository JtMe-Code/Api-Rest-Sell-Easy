import { Items } from '../entity/items.entity';

export interface ISaleInvoceDescription{
    id: number,
    customerInvoice: number,
    items: Items,
    quantity: number
}