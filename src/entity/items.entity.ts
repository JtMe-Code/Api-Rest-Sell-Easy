import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { SaleInvoiceDescription } from './sales.invoice.description.entity';
import { PurchaseInvoiceDescription } from './purchase.invoice.description.entity';

@Entity()
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
    sale_price: number;

    @Column()
    purchase_price: number;

    @OneToMany(type => SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.items)
    saleInvoiceDescription: SaleInvoiceDescription[];

    @OneToMany(type => PurchaseInvoiceDescription, purchaseInvoiceDescription => purchaseInvoiceDescription.items)
    purchaseInvoiceDescription: PurchaseInvoiceDescription[];

}