import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class SaleInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_factura: number;

    @Column()
    id_item: number;

    @Column()
    quantity: number;

}