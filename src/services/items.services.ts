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
        const data = getRepository(Items).create(this.requestBody);
        const saveData = await getRepository(Items).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(Items).findOne({id: this.requestParam});
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async readBarCode():Promise<string | object[]>{
        const result = await getRepository(Items).find({barcode: Like(`%${this.requestBody.barcode}%`)});
        if(result.length < 1){
            return "sin resultados";
        }
        return result;
    }

    async readDescription():Promise<string | object[]>{
        const result = await getRepository(Items).find({description:  Like(`%${this.requestBody.description}%`)});
        if(result.length < 1){
            return "sin resultados";
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(Items).find();
        if(result.length < 1){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(Items).findOne({id: this.requestParam});
        if(!result){
            return "items no encontrado";
        }
        const update = getRepository(Items).merge(result, this.requestBody);
        const saveUpdate = await getRepository(Items).save(update);
        return saveUpdate;
    }
}