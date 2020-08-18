import { getRepository } from 'typeorm';
import { Request } from 'express';
import { CustomerInvoice } from '../entity/customer.invoice.entity';

// *CRU -D*

export class SaleInvoiceDescriptionService {
    private requestParam: any;
    constructor(req: Request){
        this.requestParam = req.params;
    }

    async readInvoiceDescription():Promise<string | object>{
        const RESULT = await getRepository(CustomerInvoice).findOne({id: this.requestParam.customerInvoiceId})
        if(!RESULT){
            return "la factura no existe"
        }
        return RESULT;
    }
}