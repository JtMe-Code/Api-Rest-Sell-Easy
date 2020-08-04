import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type_identification: number;

    @Column()
    identification: string;
}