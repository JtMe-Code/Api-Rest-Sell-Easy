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
        const result = await getRepository(CustomerInvoice).findOne({id: this.requestParam.customerInvoiceId})
        if(!result){
            return "la factura no existe"
        }
        return result;
    }
}