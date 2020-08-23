import { getRepository } from 'typeorm';
import { Request } from 'express';
import { TypeIdentification } from '../entity/type.identification.entity';
import { IResourceRequest } from '../interfaces/resourceRequest';

// *CRU -D*

export class TypeIdentificationService {
    private body: TypeIdentification;
    private request: IResourceRequest;
    constructor(req: Request){
        this.body = req.body;
        this.request.Id = parseInt(req.params.id);
    }
    
    async create():Promise<string | object>{
        const RESULT = await getRepository(TypeIdentification).findOne({description: this.body.description});
        if(RESULT){
            return `Ya existe un tipo de identificaion ${this.body.description}`;
        }

        const DATA = getRepository(TypeIdentification).create(this.body);
        const SAVE_DATA = await getRepository(TypeIdentification).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(TypeIdentification).findOne({id: this.request.Id});
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
        const RESULT = await getRepository(TypeIdentification).findOne({id: this.request.Id});
        if(!RESULT){
            return "no existe el tipo de identificacion";
        }
        const UPDATE = getRepository(TypeIdentification).merge(RESULT, this.body);
        const SAVE_UPDATE = await getRepository(TypeIdentification).save(UPDATE);
        return SAVE_UPDATE;
    }
}