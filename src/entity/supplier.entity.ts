import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, Timestamp, UpdateDateColumn, Index} from 'typeorm';
import {TypeIdentification} from './type.identification.entity';
import { SupplierInvoice } from './supplier.invoice.entity';

@Entity()
export class Supplier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    name: string;

    @Column()
    @Index()
    id_type_identification: number;
    @ManyToOne(type => TypeIdentification, typeIdentification => typeIdentification.supplier, {eager: true})
    @JoinColumn({name: "id_type_identification"})
    typeIdentification: TypeIdentification;

    @Column()
    @Index()
    identification: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @OneToMany(type => SupplierInvoice, supplierInvoice => supplierInvoice.supplier)
    supplierInvoice: SupplierInvoice[];

}