import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {TypeIdentification} from './type.identification.entity';

@Entity()
export class Supplier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => TypeIdentification)
    @JoinColumn()
    id_type_identification: TypeIdentification;

    @Column()
    identification: string;

}