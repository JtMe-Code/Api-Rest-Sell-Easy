import {Entity, PrimaryGeneratedColumn, Column, Tree, TreeChildren} from 'typeorm';
import { SaleInvoiceDescription } from './sale.invoice.description.entity';
import { PurchaseInvoiceDescription } from './purchase.invoice.description.entity';

@Entity()
@Tree("materialized-path")
export class Items {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    stock: number;

    @Column()
    barcode: string;

    @Column()
    salePrice: number;

    @Column()
    purchasePrice: number;

    @TreeChildren()
    saleInvoiceDescription: SaleInvoiceDescription[];

    @TreeChildren()
    purchaseInvoiceDescription: PurchaseInvoiceDescription[];

}