import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, UpdateDateColumn} from 'typeorm';

@Entity()
export class Login {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

}