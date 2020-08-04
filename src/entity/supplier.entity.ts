import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Supplier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type_identification: number;

    @Column()
    identification: string;

}