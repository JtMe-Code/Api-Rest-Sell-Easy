import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Supplier} from './supplier.entity';

@Entity()
export class SupplierInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Supplier, supplier => supplier.id)
    supplier: Supplier;

    @Column()
    date_creation: Date;

}