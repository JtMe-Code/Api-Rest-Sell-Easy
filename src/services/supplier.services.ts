import { getRepository } from 'typeorm';
import { Request } from 'express';
import { Supplier } from '../entity/supplier.entity';

// *CRU -D*

export class SupplierService {
    private requestBody: Supplier;
    private requestParam: any;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        const RESULT = await getRepository(Supplier).findOne({
            where: {typeIdentification: this.requestBody.id_type_identification, identification: this.requestBody.identification}
        });
        if(RESULT){
            return `Ya existe un proveedor con ${this.requestBody.id_type_identification} ${this.requestBody.identification}`;
        }

        const DATA = getRepository(Supplier).create(this.requestBody);
        const SAVE_DATA = await getRepository(Supplier).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(Supplier).findOne({id: this.requestParam.id});
        if(!RESULT){
            return "no existe el proveedor";
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        const RESULT = await getRepository(Supplier).find();
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(Supplier).findOne({id: this.requestParam.id});
        if(!RESULT){
            return "no existe el proveedor";
        }
        const UPDATE = getRepository(Supplier).merge(RESULT, this.requestBody);
        const SAVE_UPDATE = await getRepository(Supplier).save(UPDATE);
        return SAVE_UPDATE;
    }
}