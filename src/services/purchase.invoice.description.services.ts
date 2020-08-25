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
            const RESULT = await getRepository(SupplierInvoice)
                                .createQueryBuilder('supplierInvoice')
                                .select(['supplierInvoice', 'purchaseInvoiceDescription.id_items', 'purchaseInvoiceDescription.purchasePrice', 'purchaseInvoiceDescription.quantity', 'items.description'])
                                .innerJoin('supplierInvoice.purchaseInvoiceDescription', 'purchaseInvoiceDescription')
                                .innerJoin('purchaseInvoiceDescription.items', 'items')
                                .where('supplierInvoice.id = :id', {id: parseInt(this.reqParams.id)})
                                .getMany()
            if(RESULT.length < 1){
                return "sin resultados"
            }
            return RESULT;
        }
        return "consulta invalida";  
        
    }
}