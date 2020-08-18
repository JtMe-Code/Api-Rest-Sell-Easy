import { getRepository } from 'typeorm';
import { Request } from 'express';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';

// *CRU -D*

export class PurchaseInvoiceDescriptionService {
    private requestParam: any;
    constructor(req: Request){
        this.requestParam = req.params;
    }

    async readInvoiceDescription():Promise<string | object>{
        const result = await getRepository(SupplierInvoice).findOne({id: this.requestParam.supplierInvoiceId})
        if(!result){
            return "la factura no existe"
        }
        return result;
    }
}