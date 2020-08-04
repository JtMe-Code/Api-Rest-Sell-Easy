import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class TypeExpenses {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

}