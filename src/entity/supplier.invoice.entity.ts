import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {Supplier} from './supplier.entity';
import { PurchaseInvoiceDescription } from './purchase.invoice.description.entity';

@Entity()
export class SupplierInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_supplier: number;
    @ManyToOne(type => Supplier, supplier => supplier.supplierInvoice)
    @JoinColumn({name: "id_supplier"})
    supplier: Supplier;

    @Column()
    date_creation: Date;

    @OneToMany(type => PurchaseInvoiceDescription, purchaseInvoiceDescription => purchaseInvoiceDescription.supplierInvoice)
    purchaseInvoiceDescription: PurchaseInvoiceDescription[];

}