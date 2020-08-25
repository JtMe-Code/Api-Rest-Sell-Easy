import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import {Customer} from '../entity/customer.entity';
import { IRequestParams } from '../interfaces/requestParams';
import { IRequestQuery } from '../interfaces/requestQuery';

// *CRU -D*

export class CustomerService {
    private body: Customer;
    private reqParams: IRequestParams;
    private reqQuery: IRequestQuery;
    constructor(req: Request){
        this.body = req.body;
        this.reqParams = req.params;
        this.reqQuery = req.query;
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
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){  
            const RESULT = await getRepository(Customer).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "no existe el cliente";
            }
            return RESULT;
        }
        return "consulta invalida";       
    }

    async readAll():Promise<string | object[]>{
        if(typeof this.reqQuery.offset === "string" && typeof this.reqQuery.limit === "string"){
            let offset = parseInt(this.reqQuery.offset);
            let limit = parseInt(this.reqQuery.limit);
            if(offset < 0 || limit < offset){
                return "consulta no valida";
            }
            const RESULT = await getRepository(Customer).find({skip: offset, take: limit})
            if(RESULT.length < 1){
                return "sin resultados";
            }
            return RESULT;
        }
        return "consulta no valida";        
    }

    async update():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){  
            const RESULT = await getRepository(Customer).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "no existe el cliente";
            }
            const UPDATE = getRepository(Customer).merge(RESULT, this.body);
            const SAVE_UPDATE = await getRepository(Customer).save(UPDATE);
            return SAVE_UPDATE;
        }
        return "consulta invalida";         
    }

    async search():Promise<string | object[]>{
        if(typeof this.reqParams.search === "string"){
            const RESULT = await getRepository(Customer).find({where: [
                {name: Like(`%${this.reqParams.search}%`)},
                {identification: Like(`%${this.reqParams.search}%`)}
            ]});
            if(RESULT.length < 1){
            return "sin resultados";
            }
            return RESULT;
        }
        return "consulta invalida";
    }
    
}