import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import { Items } from '../entity/items.entity';
import { IResourceRequest } from '../interfaces/resourceRequest';

// *CRU -D*

export class ItemsService {
    private body: Items;
    private request: IResourceRequest;
    constructor(req: Request){
        this.body = req.body;
        this.request = req.params;
    }
    
    async create():Promise<string | object>{
        const DATA = getRepository(Items).create(this.body);
        const SAVE_DATA = await getRepository(Items).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        if(typeof this.request.id === "string" && parseInt(this.request.id)> 0){  
            const RESULT = await getRepository(Items).findOne({id: parseInt(this.request.id)});
            if(!RESULT){
                return "sin resultados";
            }
            return RESULT;
        }
        return "consulta invalida"; 
        
    }

    async readAll():Promise<string | object[]>{
        let offset = parseInt(this.request.offset);
        let limit = parseInt(this.request.limit);
        if(offset < 0 || limit < offset){
            return "consulta no valida";
        }
        const RESULT = await getRepository(Items).find({skip: offset, take: limit})
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        if(typeof this.request.id === "string" && parseInt(this.request.id)> 0){  
            const RESULT = await getRepository(Items).findOne({id: parseInt(this.request.id)});
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
        const RESULT = await getRepository(Items).find({where: [
                                                            {description:  Like(`%${this.request.search}%`)},
                                                            {barcode: Like(`%${this.request.search}%`)}
                                                        ]});
        if(RESULT.length < 1){
        return "sin resultados";
        }
        return RESULT;
    }
}