import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';

@Entity()
export class Login extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: string;

    @Column()
    password: string;

}