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
            const RESULT = await getRepository(CustomerInvoice)
                                .createQueryBuilder('customerInvoice')
                                .select(['customerInvoice.id', 'saleInvoiceDescription.id_items', 'saleInvoiceDescription.salePrice', 'saleInvoiceDescription.quantity', 'items.description'])
                                .innerJoin('customerInvoice.saleInvoiceDescription', 'saleInvoiceDescription')
                                .innerJoin('saleInvoiceDescription.items', 'items')
                                .where('customerInvoice.id = :id', {id: parseInt(this.reqParams.id)})
                                .getMany()
            if(!RESULT){
                return "la factura no existe"
            }
            return RESULT;
        }
        return "consulta invalida";           
    }
}