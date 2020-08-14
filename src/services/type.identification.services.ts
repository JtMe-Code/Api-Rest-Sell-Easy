import { getRepository } from 'typeorm';
import { Request } from 'express';
import { TypeIdentification } from '../entity/type.identification.entity';

// *CRU -D*

export class TypeIdentificationService {
    private requestBody: TypeIdentification;
    private requestParam: any;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        const result = await getRepository(TypeIdentification).findOne({description: this.requestBody.description});
        if(result){
            return `Ya existe un tipo de identificaion ${this.requestBody.description}`;
        }

        const data = getRepository(TypeIdentification).create(this.requestBody);
        const saveData = await getRepository(TypeIdentification).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(TypeIdentification).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el tipo de identificacion";
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(TypeIdentification).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(TypeIdentification).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el tipo de identificacion";
        }
        const update = getRepository(TypeIdentification).merge(result, this.requestBody);
        const saveUpdate = await getRepository(TypeIdentification).save(update);
        return saveUpdate;
    }
}