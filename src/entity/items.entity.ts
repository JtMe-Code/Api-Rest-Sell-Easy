import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, Timestamp, UpdateDateColumn, Index} from 'typeorm';
import { SaleInvoiceDescription } from './sale.invoice.description.entity';
import { PurchaseInvoiceDescription } from './purchase.invoice.description.entity';

@Entity()
export class Items {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    description: string;

    @Column({default: 0})
    stock: number;

    @Column({default: ""})
    @Index()
    barcode: string;

    @Column({type: "double", default: 0})
    lastSalePrice: number;

    @Column({type: "double", default: 0})
    lastPurchasePrice: number;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @OneToMany(type => SaleInvoiceDescription, saleInvoiceDescription => saleInvoiceDescription.items)
    saleInvoiceDescription: SaleInvoiceDescription[];

    @OneToMany(type => PurchaseInvoiceDescription, purchaseInvoiceDescription => purchaseInvoiceDescription.items)
    purchaseInvoiceDescription: PurchaseInvoiceDescription[];

}