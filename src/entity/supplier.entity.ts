import {Entity, Column, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent} from 'typeorm';
import {TypeIdentification} from './type.identification.entity';
import { SupplierInvoice } from './supplier.invoice.entity';

@Entity()
@Tree("materialized-path")
export class Supplier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @TreeParent()
    typeIdentification: TypeIdentification;

    @Column()
    identification: string;

    @TreeChildren()
    supplierInvoice: SupplierInvoice[];

}