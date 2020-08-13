import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import { Items } from '../entity/items.entity';

// *CRU -D*

export class ItemsService {
    private requestBody: Items;
    private requestParam: any;
    private items = Items;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        const data = getRepository(this.items).create(this.requestBody);
        const saveData = await getRepository(this.items).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(this.items).findOne({id: this.requestParam});
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async readBarCode():Promise<string | object[]>{
        const result = await getRepository(this.items).find({barcode: Like(`%${this.requestBody.barcode}%`)});
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async readDescription():Promise<string | object[]>{
        const result = await getRepository(this.items).find({description:  Like(`%${this.requestBody.description}%`)});
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(this.items).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(this.items).findOne({id: this.requestParam});
        if(!result){
            return "items no encontrado";
        }
        const update = getRepository(this.items).merge(result, this.requestBody);
        const saveUpdate = await getRepository(this.items).save(update);
        return saveUpdate;
    }
}