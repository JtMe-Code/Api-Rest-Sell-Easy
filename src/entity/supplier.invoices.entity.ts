import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class SupplierInvoice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_proveedor: number;

    @Column()
    fecha: Date;

}