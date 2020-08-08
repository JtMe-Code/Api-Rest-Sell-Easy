import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, JoinColumn} from 'typeorm';
import {CustomerInvoice} from './customer.invoice.entity';
import {Items} from './items.entity';

@Entity()
export class SaleInvoiceDescription extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_customer_invoice: number;
    @ManyToOne(type => CustomerInvoice, customerInvoice => customerInvoice.saleInvoiceDescription)
    @JoinColumn({name: "id_customer_invoice"})
    customerInvoice: CustomerInvoice;

    @Column()
    id_items: number;
    @ManyToOne(type => Items, items => items.saleInvoiceDescription)
    @JoinColumn({name: "id_items"})
    items: Items;

    @Column()
    quantity: number;

}