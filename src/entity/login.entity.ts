import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, UpdateDateColumn, Index} from 'typeorm';

@Entity()
export class Login {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    user: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

}