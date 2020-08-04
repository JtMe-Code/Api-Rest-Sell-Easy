import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Supplier} from './supplier.entity';

@Entity()
export class SupplierInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Supplier)
    @JoinColumn()
    id_supplier: Supplier;

    @Column()
    date_creation: Date;

}