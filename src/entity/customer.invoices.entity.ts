import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class CustomerInvoices {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_customer: number;

    @Column()
    date_creation: string;

}