import {getRepository} from 'typeorm';
import { Request } from 'express';
import { Supplier } from '../entity/supplier.entity';
import { ISupplier } from '../interfaces/supplier';

// *CRU -D*

export class SupplierService {
    private requestBody: ISupplier;
    private requestParam: any;
    private customer = getRepository(Supplier);
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | ISupplier>{
        const result = await this.customer.find({
            where: {typeIdentification: this.requestBody.typeIdentification, identification: this.requestBody.identification}
        });
        if(result){
            return `Ya existe un proveedor con ${this.requestBody.typeIdentification} ${this.requestBody.identification}`;
        }

        const data = this.customer.create(this.requestBody);
        const saveData = await this.customer.save(data);
        return saveData;
    }

    async read():Promise<string | ISupplier>{
        const result = await this.customer.findOne({id: this.requestParam});
        if(!result){
            return "no existe el proveedor";
        }
        return result;
    }

    async readAll():Promise<string | ISupplier[]>{
        const result = await this.customer.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | ISupplier>{
        const result = await this.customer.findOne({id: this.requestParam});
        if(!result){
            return "no existe el proveedor";
        }
        const update = this.customer.merge(result, this.requestBody);
        const saveUpdate = await this.customer.save(update);
        return saveUpdate;
    }
}