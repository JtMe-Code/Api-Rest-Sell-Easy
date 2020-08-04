import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class PurchasesInvoiceDescription {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_invoice: number;

    @Column()
    id_item: number;

    @Column()
    quantity: number;

}