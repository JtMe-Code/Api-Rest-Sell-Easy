import { getRepository } from 'typeorm';
import { Request } from 'express';
import { Supplier } from '../entity/supplier.entity';
import { ISupplier } from '../interfaces/supplier';

// *CRU -D*

export class SupplierService {
    private requestBody: ISupplier;
    private requestParam: any;
    private customer = Supplier;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | ISupplier>{
        const result = await getRepository(this.customer).find({
            where: {typeIdentification: this.requestBody.id_type_identification, identification: this.requestBody.identification}
        });
        if(result){
            return `Ya existe un proveedor con ${this.requestBody.id_type_identification} ${this.requestBody.identification}`;
        }

        const data = getRepository(this.customer).create(this.requestBody);
        const saveData = await getRepository(this.customer).save(data);
        return saveData;
    }

    async read():Promise<string | ISupplier>{
        const result = await getRepository(this.customer).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el proveedor";
        }
        return result;
    }

    async readAll():Promise<string | ISupplier[]>{
        const result = await getRepository(this.customer).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | ISupplier>{
        const result = await getRepository(this.customer).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el proveedor";
        }
        const update = getRepository(this.customer).merge(result, this.requestBody);
        const saveUpdate = await getRepository(this.customer).save(update);
        return saveUpdate;
    }
}