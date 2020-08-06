import {getRepository} from 'typeorm';
import { Request } from 'express';
import {Customer} from '../entity/customer.entity';
import {ICustomer} from '../interfaces/customer';

// *CRU -D*

export class CustomerService {
    private requestBody: ICustomer;
    private requestParam: any;
    private customer = getRepository(Customer);
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | ICustomer>{
        const result = await this.customer.find({
            where: {typeIdentification: this.requestBody.typeIdentification, identification: this.requestBody.identification}
        });
        if(result){
            return `Ya existe un cliente con ${this.requestBody.typeIdentification} ${this.requestBody.identification}`;
        }

        const data = this.customer.create(this.requestBody);
        const saveData = await this.customer.save(data);
        return saveData;
    }

    async read():Promise<string | ICustomer>{
        const result = await this.customer.findOne({id: this.requestParam});
        if(!result){
            return "no existe el cliente";
        }
        return result;
    }

    async readAll():Promise<string | ICustomer[]>{
        const result = await this.customer.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | ICustomer>{
        const result = await this.customer.findOne({id: this.requestParam});
        if(!result){
            return "no existe el cliente";
        }
        const update = this.customer.merge(result, this.requestBody);
        const saveUpdate = await this.customer.save(update);
        return saveUpdate;
    }
}