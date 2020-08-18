import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import { Items } from '../entity/items.entity';

// *CRU -D*

export class ItemsService {
    private requestBody: Items;
    private requestParam: any;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        const DATA = getRepository(Items).create(this.requestBody);
        const SAVE_DATA = await getRepository(Items).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(Items).findOne({id: this.requestParam});
        if(!RESULT){
            return "sin resultados";
        }
        return RESULT;
    }

    async readBarCode():Promise<string | object[]>{
        const RESULT = await getRepository(Items).find({barcode: Like(`%${this.requestBody.barcode}%`)});
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async readDescription():Promise<string | object[]>{
        const RESULT = await getRepository(Items).find({description:  Like(`%${this.requestBody.description}%`)});
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        const RESULT = await getRepository(Items).find();
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(Items).findOne({id: this.requestParam});
        if(!RESULT){
            return "items no encontrado";
        }
        const UPDATE = getRepository(Items).merge(RESULT, this.requestBody);
        const SAVE_UPDATE = await getRepository(Items).save(UPDATE);
        return SAVE_UPDATE;
    }
}