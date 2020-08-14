import { getRepository } from 'typeorm';
import { Request } from 'express';
import { SaleInvoiceDescription } from '../entity/sale.invoice.description.entity';

// *CRU -D*

export class SaleInvoiceDescriptionService {
    private requestParam: any;
    constructor(req: Request){
        this.requestParam = req.params;
    }

    async readInvoiceDescription():Promise<string | object[]>{
        const result = await getRepository(SaleInvoiceDescription).find({customerInvoice: this.requestParam.customerInvoiceId});
        return result;
    }
}