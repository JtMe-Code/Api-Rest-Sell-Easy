import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class CustomerInvoices {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_cliente: number;

    @Column()
    fecha: string;

}