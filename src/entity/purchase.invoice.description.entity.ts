import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import {SupplierInvoice} from './supplier.invoice.entity';
import {Items} from './items.entity';

@Entity()
export class PurchaseInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_supplier_invoice: number;
    @ManyToOne(type => SupplierInvoice, supplierInvoice => supplierInvoice.purchaseInvoiceDescription, {eager: true, onDelete: 'CASCADE'})
    @JoinColumn({name: "id_supplier_invoice"})
    supplierInvoice: SupplierInvoice;

    @Column()
    id_items: number;
    @ManyToOne(type => Items, items => items.purchaseInvoiceDescription)
    @JoinColumn({name: "id_items"})
    items: Items;

    @Column()
    quantity: number;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

}