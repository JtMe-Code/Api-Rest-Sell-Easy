import { getRepository } from 'typeorm';
import { Request } from 'express';
import { CustomerInvoice } from '../entity/customer.invoice.entity';
import { IRequestParams } from '../interfaces/requestParams';

// *CRU -D*

export class SaleInvoiceDescriptionService {
    private reqParams: IRequestParams
    constructor(req: Request){
        this.reqParams = req.params;
    }

    async readInvoiceDescription():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){  
            const RESULT = await getRepository(CustomerInvoice).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "sin resultados"
            }
            return RESULT;
        }
        return "consulta invalida";           
    }
}