import { getRepository } from 'typeorm';
import { Request } from 'express';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';
import { IRequestParams } from '../interfaces/requestParams';

// *CRU -D*

export class PurchaseInvoiceDescriptionService {
    private reqParams: IRequestParams;
    constructor(req: Request){
        this.reqParams = req.params;
    }

    async readInvoiceDescription():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){
            const RESULT = await getRepository(SupplierInvoice).findOne({id: parseInt(this.reqParams.id)}, {relations: ['purchaseInvoiceDescription']});
            if(!RESULT){
                return "sin resultados"
            }
            return RESULT;
        }
        return "consulta invalida";
        
    }
}