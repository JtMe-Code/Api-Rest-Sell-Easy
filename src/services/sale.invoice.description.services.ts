import { getRepository } from 'typeorm';
import { Request } from 'express';
import { CustomerInvoice } from '../entity/customer.invoice.entity';
import { IResourceRequest } from '../interfaces/resourceRequest';

// *CRU -D*

export class SaleInvoiceDescriptionService {
    private request: IResourceRequest;
    constructor(req: Request){
        this.request = req.params;
    }

    async readInvoiceDescription():Promise<string | object>{
        if(typeof this.request.id === "string" && parseInt(this.request.id)> 0){  
            const RESULT = await getRepository(CustomerInvoice)
                                .createQueryBuilder('customerInvoice')
                                .select(['customerInvoice', 'saleInvoiceDescription.id_items', 'saleInvoiceDescription.salePrice', 'saleInvoiceDescription.quantity', 'items.description'])
                                .innerJoin('customerInvoice.id', 'saleInvoiceDescription.id_customer_invoice')
                                .innerJoin('saleInvoiceDescription.id_items', 'items')
                                .where('customerInvoice.id = :id', {id: parseInt(this.request.id)})
                                .getMany()
            if(!RESULT){
                return "la factura no existe"
            }
            return RESULT;
        }
        return "consulta invalida";           
    }
}