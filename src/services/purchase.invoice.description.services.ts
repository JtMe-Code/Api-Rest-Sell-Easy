import {getRepository} from 'typeorm';
import { Request } from 'express';
import { IPurchaseInvoiceDescription } from '../interfaces/purchase.invoice.description';
import { PurchaseInvoiceDescription } from '../entity/purchase.invoice.description.entity';

// *CRU -D*

export class PurchaseInvoiceDescriptionService {
    private requestBody: IPurchaseInvoiceDescription[];
    private purchaseInvoiceDescription = getRepository(PurchaseInvoiceDescription);
    constructor(req: Request){
        this.requestBody = req.body;
    }
    
    async create():Promise<IPurchaseInvoiceDescription | IPurchaseInvoiceDescription[]>{
        const data = this.purchaseInvoiceDescription.create(this.requestBody);
        const saveData = await this.purchaseInvoiceDescription.save(data);
        return saveData;
    }

    async readInvoiceDescription():Promise<string | IPurchaseInvoiceDescription[]>{
        const result = await this.purchaseInvoiceDescription.find({});
        return result;
    }

    async readAll():Promise<string | IPurchaseInvoiceDescription[]>{
        const result = await this.purchaseInvoiceDescription.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }
}