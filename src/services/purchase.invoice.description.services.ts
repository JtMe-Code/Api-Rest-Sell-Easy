import { getRepository } from 'typeorm';
import { Request } from 'express';
import { PurchaseInvoiceDescription } from '../entity/purchase.invoice.description.entity';

// *CRU -D*

export class PurchaseInvoiceDescriptionService {
    private requestParam: any;
    constructor(req: Request){
        this.requestParam = req.params;
    }

    async readInvoiceDescription():Promise<string | object[]>{
        const result = await getRepository(PurchaseInvoiceDescription).find({supplierInvoice: this.requestParam.supplierInvoiceId});
        return result;
    }
}