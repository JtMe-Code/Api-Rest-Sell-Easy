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
        this.request.Id = parseInt(req.params.id);
        this.request.Search = req.params.search;
        this.request.Offset = req.query.offset;
        this.request.Limit = req.query.limit;
    }
    
    async create():Promise<string | object>{
        const DATA = getRepository(Items).create(this.body);
        const SAVE_DATA = await getRepository(Items).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(Items).findOne({id: this.request.Id});
        if(!RESULT){
            return "sin resultados";
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        let offset = parseInt(this.request.Offset);
        let limit = parseInt(this.request.Limit);
        if(offset < 0 && limit < offset){
            return "consulta no valida";
        }
        const RESULT = await getRepository(Items).find({skip: offset, take: limit})
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(Items).findOne({id: this.request.Id});
        if(!RESULT){
            return "items no encontrado";
        }
        const UPDATE = getRepository(Items).merge(RESULT, this.body);
        const SAVE_UPDATE = await getRepository(Items).save(UPDATE);
        return SAVE_UPDATE;
    }

    async search():Promise<string | object[]>{
        const RESULT = await getRepository(Items).find({where: [
                                                            {description:  Like(`%${this.request.Search}%`)},
                                                            {barcode: Like(`%${this.request.Search}%`)}
                                                        ]});
        if(RESULT.length < 1){
        return "sin resultados";
        }
        return RESULT;
    }
}