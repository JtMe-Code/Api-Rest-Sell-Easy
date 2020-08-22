import { getRepository, Like } from 'typeorm';
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
        const RESULT = await getRepository(Customer).findOne({
            where: {typeIdentification: this.requestBody.id_type_identification, identification: this.requestBody.identification}
        });
        if(RESULT){
            return `Ya existe un cliente con ${this.requestBody.id_type_identification} ${this.requestBody.identification}`;
        }

        const DATA = getRepository(Customer).create(this.requestBody);
        const SAVE_DATA = await getRepository(Customer).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(Customer).findOne({id: this.requestParam.id});
        if(!RESULT){
            return "no existe el cliente";
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        const RESULT = await getRepository(Customer).find();
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(Customer).findOne({id: this.requestParam.id});
        if(!RESULT){
            return "no existe el cliente";
        }
        const UPDATE = getRepository(Customer).merge(RESULT, this.requestBody);
        const SAVE_UPDATE = await getRepository(Customer).save(UPDATE);
        return SAVE_UPDATE;
    }

    async search():Promise<string | object[]>{
        const RESULT = await getRepository(Customer).find({where: [
            {name: Like(`%${this.requestParam.search}%`)},
            {identification: Like(`%${this.requestParam.search}%`)}
        ]});
        if(RESULT.length < 1){
        return "sin resultados";
        }
        return RESULT;
    }
    
}