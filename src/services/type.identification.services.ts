import {getRepository} from 'typeorm';
import { Request } from 'express';
import { ITypeIdentification } from '../interfaces/type.identification';
import { TypeIdentification } from '../entity/type.identification.entity';

// *CRU -D*

export class TypeIdentificationService {
    private requestBody: ITypeIdentification;
    private requestParam: any;
    private typeIdentification = getRepository(TypeIdentification);
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | ITypeIdentification>{
        const result = await this.typeIdentification.find({description: this.requestBody.description});
        if(result){
            return `Ya un tipo de gasto ${this.requestBody.description}`;
        }

        const data = this.typeIdentification.create(this.requestBody);
        const saveData = await this.typeIdentification.save(data);
        return saveData;
    }

    async read():Promise<string | ITypeIdentification>{
        const result = await this.typeIdentification.findOne({id: this.requestParam});
        if(!result){
            return "no existe el cliente";
        }
        return result;
    }

    async readAll():Promise<string | ITypeIdentification[]>{
        const result = await this.typeIdentification.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | ITypeIdentification>{
        const result = await this.typeIdentification.findOne({id: this.requestParam});
        if(!result){
            return "no existe el cliente";
        }
        const update = this.typeIdentification.merge(result, this.requestBody);
        const saveUpdate = await this.typeIdentification.save(update);
        return saveUpdate;
    }
}