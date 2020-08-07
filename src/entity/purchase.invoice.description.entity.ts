import {Entity, Column, PrimaryGeneratedColumn, Tree, TreeParent} from 'typeorm';
import {SupplierInvoice} from './supplier.invoice.entity';
import {Items} from './items.entity';

@Entity()
@Tree("materialized-path")
export class PurchaseInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @TreeParent()
    supplierInvoice: SupplierInvoice;

    @TreeParent()
    items: Items;

    @Column()
    quantity: number;

}