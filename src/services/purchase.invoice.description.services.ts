import {getRepository} from 'typeorm';
import { Request } from 'express';
import { IPurchaseInvoiceDescription } from '../interfaces/purchase.invoice.description';
import { PurchaseInvoiceDescription } from '../entity/purchase.invoice.description.entity';

// *CRU -D*

export class PurchaseInvoiceDescriptionService {
    private requestBody: IPurchaseInvoiceDescription;
    private requestParam: any;
    private purchaseInvoiceDescription = getRepository(PurchaseInvoiceDescription);
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<IPurchaseInvoiceDescription | IPurchaseInvoiceDescription[]>{
        const data = this.purchaseInvoiceDescription.create(this.requestBody);
        const saveData = await this.purchaseInvoiceDescription.save(data);
        return saveData;
    }

    async read():Promise<string | IPurchaseInvoiceDescription>{
        const result = await this.purchaseInvoiceDescription.findOne({id: this.requestParam});
        if(!result){
            return `no existe la factura ${this.requestParam}`;
        }
        return result;
    }

    async readAll():Promise<string | IPurchaseInvoiceDescription[]>{
        const result = await this.purchaseInvoiceDescription.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | IPurchaseInvoiceDescription>{
        const result = await this.purchaseInvoiceDescription.findOne({id: this.requestParam});
        if(!result){
            return `no existe la factura ${this.requestParam}`;
        }
        const update = this.purchaseInvoiceDescription.merge(result, this.requestBody);
        const saveUpdate = await this.purchaseInvoiceDescription.save(update);
        return saveUpdate;
    }
}