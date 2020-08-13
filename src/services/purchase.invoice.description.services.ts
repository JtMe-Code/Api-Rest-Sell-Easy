import { getRepository } from 'typeorm';
import { Request } from 'express';
import { PurchaseInvoiceDescription } from '../entity/purchase.invoice.description.entity';

// *CRU -D*

export class PurchaseInvoiceDescriptionService {
    private requestBody: PurchaseInvoiceDescription;    
    private requestParam: any;
    private purchaseInvoiceDescription = PurchaseInvoiceDescription;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }

    async readInvoiceDescription():Promise<string | object[]>{
        const result = await getRepository(this.purchaseInvoiceDescription).find({supplierInvoice: this.requestParam.supplierInvoiceId});
        return result;
    }
}