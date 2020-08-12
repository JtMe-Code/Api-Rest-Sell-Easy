import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {TypeIdentification} from './type.identification.entity';
import { SupplierInvoice } from './supplier.invoice.entity';

@Entity()
export class Supplier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    id_type_identification: number;
    @ManyToOne(type => TypeIdentification, typeIdentification => typeIdentification.supplier)
    @JoinColumn({name: "id_type_identification"})
    typeIdentification: TypeIdentification;

    @Column()
    identification: string;

    @OneToMany(type => SupplierInvoice, supplierInvoice => supplierInvoice.supplier)
    supplierInvoice: SupplierInvoice[];

}