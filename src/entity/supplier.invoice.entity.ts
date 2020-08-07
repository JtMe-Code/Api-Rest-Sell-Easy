import {Entity, Column, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent,} from 'typeorm';
import {Supplier} from './supplier.entity';
import { PurchaseInvoiceDescription } from './purchase.invoice.description.entity';

@Entity()
@Tree("materialized-path")
export class SupplierInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @TreeParent()
    supplier: Supplier;

    @Column()
    dateCreation: Date;

    @TreeChildren()
    purchaseInvoiceDescription: PurchaseInvoiceDescription[];

}