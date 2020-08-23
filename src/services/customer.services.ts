import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import {Customer} from '../entity/customer.entity';
import { IResourceRequest } from '../interfaces/resourceRequest';

// *CRU -D*

export class CustomerService {
    private body: Customer;
    private request: IResourceRequest;
    constructor(req: Request){
        this.body = req.body;
        this.request.id = parseInt(req.params.id);
        this.request.search = req.params.search;
        this.request.offset = req.query.offset;
        this.request.limit = req.query.limit;
    }
    
    async create():Promise<string | object>{
        const RESULT = await getRepository(Customer).findOne({
            where: {typeIdentification: this.body.id_type_identification, identification: this.body.identification}
        });
        if(RESULT){
            return `Ya existe un cliente con ${this.body.id_type_identification} ${this.body.identification}`;
        }

        const DATA = getRepository(Customer).create(this.body);
        const SAVE_DATA = await getRepository(Customer).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(Customer).findOne({id: this.request.id});
        if(!RESULT){
            return "no existe el cliente";
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        let offset = parseInt(this.request.offset);
        let limit = parseInt(this.request.limit);
        if(offset < 0 || limit < offset){
            return "consulta no valida";
        }
        const RESULT = await getRepository(Customer).find({skip: offset, take: limit})
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(Customer).findOne({id: this.request.id});
        if(!RESULT){
            return "no existe el cliente";
        }
        const UPDATE = getRepository(Customer).merge(RESULT, this.body);
        const SAVE_UPDATE = await getRepository(Customer).save(UPDATE);
        return SAVE_UPDATE;
    }

    async search():Promise<string | object[]>{
        const RESULT = await getRepository(Customer).find({where: [
            {name: Like(`%${this.request.search}%`)},
            {identification: Like(`%${this.request.search}%`)}
        ]});
        if(RESULT.length < 1){
        return "sin resultados";
        }
        return RESULT;
    }
    
}