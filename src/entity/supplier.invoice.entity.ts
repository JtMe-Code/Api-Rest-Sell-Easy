import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {Supplier} from './supplier.entity';
import { PurchaseInvoiceDescription } from './purchase.invoice.description.entity';

@Entity()
export class SupplierInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Supplier, supplier => supplier.supplierInvoice)
    supplier: Supplier;

    @Column()
    dateCreation: Date;

    @OneToMany(type => PurchaseInvoiceDescription, purchaseInvoiceDescription => purchaseInvoiceDescription.supplierInvoice, {
        cascade: true
    })
    purchaseInvoiceDescription: PurchaseInvoiceDescription[];

}