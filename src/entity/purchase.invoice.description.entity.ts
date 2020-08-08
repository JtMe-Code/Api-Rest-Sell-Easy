import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, JoinColumn} from 'typeorm';
import {SupplierInvoice} from './supplier.invoice.entity';
import {Items} from './items.entity';

@Entity()
export class PurchaseInvoiceDescription extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_supplier_invoice: number;
    @ManyToOne(type => SupplierInvoice, supplierInvoice => supplierInvoice.purchaseInvoiceDescription)
    @JoinColumn({name: "id_supplier_invoice"})
    supplierInvoice: SupplierInvoice;

    @Column()
    id_items: number;
    @ManyToOne(type => Items, items => items.purchaseInvoiceDescription)
    @JoinColumn({name: "id_items"})
    items: Items;

    @Column()
    quantity: number;

}