import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class TypeIdentification {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

}