import { getRepository } from 'typeorm';
import { Request } from 'express';
import {Customer} from '../entity/customer.entity';

// *CRU -D*

export class CustomerService {
    private requestBody: Customer;
    private requestParam: any;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        const result = await getRepository(Customer).findOne({
            where: {typeIdentification: this.requestBody.id_type_identification, identification: this.requestBody.identification}
        });
        if(result){
            return `Ya existe un cliente con ${this.requestBody.id_type_identification} ${this.requestBody.identification}`;
        }

        const data = getRepository(Customer).create(this.requestBody);
        const saveData = await getRepository(Customer).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(Customer).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el cliente";
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(Customer).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(Customer).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el cliente";
        }
        const update = getRepository(Customer).merge(result, this.requestBody);
        const saveUpdate = await getRepository(Customer).save(update);
        return saveUpdate;
    }
}