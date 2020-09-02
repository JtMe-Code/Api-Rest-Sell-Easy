import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, Timestamp, UpdateDateColumn, CreateDateColumn, Index} from 'typeorm';
import {TypeIdentification} from './type.identification.entity';
import { CustomerInvoice } from './customer.invoice.entity';

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    name: string;
    
    @Column()
    @Index()
    id_type_identification: number;
    @ManyToOne(type => TypeIdentification, typeIdentification => typeIdentification.customer, {eager: true})
    @JoinColumn({name: "id_type_identification"})
    typeIdentification: TypeIdentification;

    @Column()
    @Index()
    identification: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @OneToMany(type => CustomerInvoice, customerInvoice => customerInvoice.customer)
    customerInvoice: CustomerInvoice[];
    
}