import { getRepository } from 'typeorm';
import { Request } from 'express';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';
import { ISupplierInvoice } from '../interfaces/supplier.invoice';

// *CRU -D*

export class SupplierInvoiceService {
    private requestBody: ISupplierInvoice;
    private requestParam: any;
    private supplierInvoice = getRepository(SupplierInvoice);
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<ISupplierInvoice>{
        const data = this.supplierInvoice.create(this.requestBody);
        const saveData = await this.supplierInvoice.save(data);
        return saveData;
    }

    async read():Promise<string | ISupplierInvoice>{
        const result = await this.supplierInvoice.findOne({id: this.requestParam});
        if(!result){
            return `no existe la factura ${this.requestParam}`;
        }
        return result;
    }

    async readAll():Promise<string | ISupplierInvoice[]>{
        const result = await this.supplierInvoice.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | ISupplierInvoice>{
        const result = await this.supplierInvoice.findOne({id: this.requestParam});
        if(!result){
            return `no existe la factura ${this.requestParam}`;
        }
        const update = this.supplierInvoice.merge(result, this.requestBody);
        const saveUpdate = await this.supplierInvoice.save(update);
        return saveUpdate;
    }
}
