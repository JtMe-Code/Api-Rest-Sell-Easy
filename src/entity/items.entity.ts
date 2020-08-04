import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Items {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    stock: number;

    @Column()
    barcode: string;

    @Column()
    sale_price: number;

    @Column()
    purchase_price: number;

}