import { getRepository } from 'typeorm';
import { Request } from 'express';
import { TypeIdentification } from '../entity/type.identification.entity';

// *CRU -D*

export class TypeIdentificationService {
    private requestBody: TypeIdentification;
    private requestParam: any;
    private typeIdentification = TypeIdentification;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        const result = await getRepository(this.typeIdentification).findOne({description: this.requestBody.description});
        if(result){
            return `Ya existe un tipo de identificaion ${this.requestBody.description}`;
        }

        const data = getRepository(this.typeIdentification).create(this.requestBody);
        const saveData = await getRepository(this.typeIdentification).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(this.typeIdentification).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el tipo de identificacion";
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(this.typeIdentification).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(this.typeIdentification).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el tipo de identificacion";
        }
        const update = getRepository(this.typeIdentification).merge(result, this.requestBody);
        const saveUpdate = await getRepository(this.typeIdentification).save(update);
        return saveUpdate;
    }
}