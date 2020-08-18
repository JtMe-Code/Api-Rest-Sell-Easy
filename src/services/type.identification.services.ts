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
        const RESULT = await getRepository(TypeIdentification).findOne({description: this.requestBody.description});
        if(RESULT){
            return `Ya existe un tipo de identificaion ${this.requestBody.description}`;
        }

        const DATA = getRepository(TypeIdentification).create(this.requestBody);
        const SAVE_DATA = await getRepository(TypeIdentification).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(TypeIdentification).findOne({id: this.requestParam.id});
        if(!RESULT){
            return "no existe el tipo de identificacion";
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        const RESULT = await getRepository(TypeIdentification).find();
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(TypeIdentification).findOne({id: this.requestParam.id});
        if(!RESULT){
            return "no existe el tipo de identificacion";
        }
        const UPDATE = getRepository(TypeIdentification).merge(RESULT, this.requestBody);
        const SAVE_UPDATE = await getRepository(TypeIdentification).save(UPDATE);
        return SAVE_UPDATE;
    }
}