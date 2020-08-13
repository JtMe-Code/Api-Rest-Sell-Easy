import { getRepository } from 'typeorm';
import { Request } from 'express';
import { SaleInvoiceDescription } from '../entity/sale.invoice.description.entity';

// *CRU -D*

export class SaleInvoiceDescriptionService {
    private requestBody: SaleInvoiceDescription;
    private requestParam: any;
    private saleInvoiceDescription = SaleInvoiceDescription;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }

    async readInvoiceDescription():Promise<string | object[]>{
        const result = await getRepository(this.saleInvoiceDescription).find({customerInvoice: this.requestParam.customerInvoiceId});
        return result;
    }
}