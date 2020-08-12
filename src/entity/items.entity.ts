import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { SaleInvoiceDescription } from './sale.invoice.description.entity';
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

    @Column("double")
    salePrice: number;

    @Column("double")
    purchasePrice: number;

    @OneToMany(type => SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.items)
    saleInvoiceDescription: SaleInvoiceDescription[];

    @OneToMany(type => PurchaseInvoiceDescription, purchaseInvoiceDescription => purchaseInvoiceDescription.items)
    purchaseInvoiceDescription: PurchaseInvoiceDescription[];

}