import { Request } from 'express';
import { IPurchaseInvoiceDescription } from '../interfaces/purchase.invoice.description';
import { PurchaseInvoiceDescription } from '../entity/purchase.invoice.description.entity';

// *CRU -D*

export class PurchaseInvoiceDescriptionService {
    private requestBody: IPurchaseInvoiceDescription[];    
    private requestParam: any;
    private purchaseInvoiceDescription = PurchaseInvoiceDescription;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<IPurchaseInvoiceDescription | IPurchaseInvoiceDescription[]>{
        const data = this.purchaseInvoiceDescription.create(this.requestBody);
        const saveData = await this.purchaseInvoiceDescription.save(data);
        return saveData;
    }

    async readInvoiceDescription():Promise<string | IPurchaseInvoiceDescription[]>{
        const result = await this.purchaseInvoiceDescription.find({supplierInvoice: this.requestParam.supplierInvoiceId});
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