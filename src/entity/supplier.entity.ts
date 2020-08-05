import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {TypeIdentification} from './type.identification.entity';
import { SupplierInvoice } from "./supplier.invoices.entity";

@Entity()
export class Supplier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => TypeIdentification, type_identification => type_identification.customer)
    type_identification: TypeIdentification;

    @Column()
    identification: string;

    @OneToMany(type => SupplierInvoice, supplierInvoice => supplierInvoice.supplier)
    supplierInvoice: SupplierInvoice[];

}