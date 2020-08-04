import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Expenses {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_type_expenses: string;

    @Column()
    description: string;

    @Column()
    id_item: number;

    @Column()
    quantity: number;

    @Column()
    value: number;

}