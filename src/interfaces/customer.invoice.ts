import { Customer } from '../entity/customer.entity';

export interface ICustomerInvoice {
    id: number,
    customer: Customer,
    dateCreation: Date
}