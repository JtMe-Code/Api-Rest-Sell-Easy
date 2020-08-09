import {Like} from 'typeorm';
import { Request } from 'express';
import { Items } from '../entity/items.entity';
import { IItems } from '../interfaces/items';

// *CRU -D*

export class ItemsService {
    private requestBody: IItems;
    private requestParam: any;
    private items = Items;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | IItems>{
        const data = this.items.create(this.requestBody);
        const saveData = await this.items.save(data);
        return saveData;
    }

    async read():Promise<string | IItems>{
        const result = await this.items.findOne({id: this.requestParam});
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async readBarCode():Promise<string | IItems[]>{
        const result = await this.items.find({barcode: Like(`%${this.requestBody.barcode}%`)});
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async readDescription():Promise<string | IItems[]>{
        const result = await this.items.find({description:  Like(`%${this.requestBody.description}%`)});
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async readAll():Promise<string | IItems[]>{
        const result = await this.items.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | IItems>{
        const result = await this.items.findOne({id: this.requestParam});
        if(!result){
            return "items no encontrado";
        }
        const update = this.items.merge(result, this.requestBody);
        const saveUpdate = await this.items.save(update);
        return saveUpdate;
    }
}