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
        const result = await getRepository(SupplierInvoice)
                                .findOneOrFail({id: this.requestParam.supplierInvoiceId}, 
                                    {relations: ["purchaseInvoiceDescription.items.description",
                                                "purchaseInvoiceDescription.items.purchasePrice",
                                                "purchaseInvoiceDescription.quantity"]});
        return result;
    }
}