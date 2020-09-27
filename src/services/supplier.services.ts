import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import { Supplier } from '../entity/supplier.entity';
import { IRequestParams } from '../interfaces/requestParams';
import { IRequestQuery } from '../interfaces/requestQuery';

// *CRU -D*

export class SupplierService {
    private body: Supplier;
    private reqParams: IRequestParams;
    private reqQuery: IRequestQuery;
    constructor(req: Request){
        this.body = req.body;
        this.reqParams = req.params;
        this.reqQuery = req.query;
    }
    
    async create():Promise<string | object>{
        const RESULT = await getRepository(Supplier).findOne({
            where: {id_type_identification: this.body.id_type_identification, identification: this.body.identification}
        });
        if(RESULT){
            return `Ya existe un proveedor con ${RESULT.typeIdentification.description} ${this.body.identification}`;
        }

        const DATA = getRepository(Supplier).create(this.body);
        const SAVE_DATA = await getRepository(Supplier).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){
            const RESULT = await getRepository(Supplier).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "no existe el proveedor";
            }
            return RESULT;
        }
        return "consulta invalida";
        
    }

    async readAll():Promise<string | [Supplier[], number]>{
        if(typeof this.reqQuery.offset === "string" && typeof this.reqQuery.limit === "string"){
            let offset = parseInt(this.reqQuery.offset);
            let limit = parseInt(this.reqQuery.limit);
            if(offset < 0 || limit <= offset || isNaN(offset) || isNaN(limit)){
                return "consulta no valida";
            }
            const RESULT = await getRepository(Supplier).findAndCount({order: {createdAt: "DESC"}, skip: offset, take: limit});
            if(RESULT[1] < 1){
                return "sin resultados";
            }
            return RESULT;
        }
        return "consulta no valida";
    }

    async update():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){
            const RESULT = await getRepository(Supplier).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "no existe el proveedor";
            }
            const UPDATE = getRepository(Supplier).merge(RESULT, this.body);
            const SAVE_UPDATE = await getRepository(Supplier).save(UPDATE);
            return SAVE_UPDATE;
        }
        return "consulta invalida";
        
    }

    async search():Promise<string | object[]>{
        if(typeof this.reqParams.search === "string"){
            const SEARCH = this.reqParams.search.toString();
            const RESULT = await getRepository(Supplier).find({where: [
                {name: Like(`%${SEARCH}%`)},
                {identification: Like(`%${SEARCH}%`)}
                ]});
            if(RESULT.length < 1){
            return "sin resultados";
            }
            return RESULT;
        }
        return "consulta invalida";
    }
    
}