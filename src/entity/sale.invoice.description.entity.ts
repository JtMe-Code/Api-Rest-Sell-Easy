import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, Timestamp, UpdateDateColumn, Index} from 'typeorm';
import {CustomerInvoice} from './customer.invoice.entity';
import {Items} from './items.entity';

@Entity()
export class SaleInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    id_customer_invoice: number;
    @ManyToOne(type => CustomerInvoice, customerInvoice => customerInvoice.saleInvoiceDescription, {onDelete: 'CASCADE'})
    @JoinColumn({name: "id_customer_invoice"})
    customerInvoice: CustomerInvoice;

    @Column()
    id_items: number;
    @ManyToOne(type => Items, items => items.saleInvoiceDescription)
    @JoinColumn({name: "id_items"})
    items: Items;

    @Column()
    itemsDescription: string;

    @Column("double")
    salePrice: number;

    @Column("double")
    quantity: number;

    @Column("double")
    totalValue: number;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

}