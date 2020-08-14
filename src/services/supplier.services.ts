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
        const result = await getRepository(Supplier).findOne({
            where: {typeIdentification: this.requestBody.id_type_identification, identification: this.requestBody.identification}
        });
        if(result){
            return `Ya existe un proveedor con ${this.requestBody.id_type_identification} ${this.requestBody.identification}`;
        }

        const data = getRepository(Supplier).create(this.requestBody);
        const saveData = await getRepository(Supplier).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(Supplier).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el proveedor";
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(Supplier).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(Supplier).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el proveedor";
        }
        const update = getRepository(Supplier).merge(result, this.requestBody);
        const saveUpdate = await getRepository(Supplier).save(update);
        return saveUpdate;
    }
}