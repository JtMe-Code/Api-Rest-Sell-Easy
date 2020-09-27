import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import { Items } from '../entity/items.entity';
import { IRequestParams } from '../interfaces/requestParams';
import { IRequestQuery } from '../interfaces/requestQuery';

// *CRU -D*

export class ItemsService {
    private body: Items;
    private reqParams: IRequestParams;
    private reqQuery: IRequestQuery;
    constructor(req: Request){
        this.body = req.body;
        this.reqParams = req.params;
        this.reqQuery = req.query;
    }
    
    async create():Promise<string | object>{
        const DATA = getRepository(Items).create(this.body);
        const SAVE_DATA = await getRepository(Items).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){
            const RESULT = await getRepository(Items).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "sin resultados";
            }
            return RESULT;
        }
        return "consulta invalida";
        
    }

    async readAll():Promise<string | [Items[], number]>{
        if(typeof this.reqQuery.offset === "string" && typeof this.reqQuery.limit === "string"){
            let offset = parseInt(this.reqQuery.offset);
            let limit = parseInt(this.reqQuery.limit);
            if(offset < 0 || limit <= offset || isNaN(offset) || isNaN(limit)){
                return "consulta no valida";
            }
            const RESULT = await getRepository(Items).findAndCount({order: {createdAt: "DESC"}, skip: offset, take: limit});
            if(RESULT[1] < 1){
                return "sin resultados";
            }
            return RESULT;
        }
        return "consulta no valida";
        
    }

    async update():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){  
            const RESULT = await getRepository(Items).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "items no encontrado";
            }
            const UPDATE = getRepository(Items).merge(RESULT, this.body);
            const SAVE_UPDATE = await getRepository(Items).save(UPDATE);
            return SAVE_UPDATE;
        }
        return "consulta invalida";
        
    }

    async search():Promise<string | object[]>{
        if(typeof this.reqParams.search === "string"){
            const SEARCH = this.reqParams.search.toString();
            const RESULT = await getRepository(Items).find({where: [
                {description:  Like(`%${SEARCH}%`)},
                {barcode: Like(`%${SEARCH}%`)}
            ]});
            if(RESULT.length < 1){
            return "sin resultados";
            }
            return RESULT;
        }
        return "consulta invalida";
    }
}