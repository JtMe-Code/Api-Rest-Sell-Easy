import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, Timestamp, UpdateDateColumn, Index} from 'typeorm';
import {Supplier} from './supplier.entity';
import { PurchaseInvoiceDescription } from './purchase.invoice.description.entity';

@Entity()
export class SupplierInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    id_supplier: number;
    @ManyToOne(type => Supplier, supplier => supplier.supplierInvoice, {eager: true})
    @JoinColumn({name: "id_supplier"})
    supplier: Supplier;

    @Column("double")
    totalValue: number;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @OneToMany(type => PurchaseInvoiceDescription, purchaseInvoiceDescription => purchaseInvoiceDescription.supplierInvoice, {cascade: true})
    purchaseInvoiceDescription: PurchaseInvoiceDescription[];

}