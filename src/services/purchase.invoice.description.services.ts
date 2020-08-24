import { getRepository } from 'typeorm';
import { Request } from 'express';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';
import { IResourceRequest } from '../interfaces/resourceRequest';

// *CRU -D*

export class PurchaseInvoiceDescriptionService {
    private request: IResourceRequest;
    constructor(req: Request){
        this.request.id = req.params.id;
    }

    async readInvoiceDescription():Promise<string | object>{
        if(typeof this.request.id === "undefined"){
            return "consulta no valida"
        }
        const RESULT = await getRepository(SupplierInvoice)
                                .createQueryBuilder('supplierInvoice')
                                .select(['supplierInvoice', 'purchaseInvoiceDescription.id_items', 'purchaseInvoiceDescription.purchasePrice', 'purchaseInvoiceDescription.quantity', 'items.description'])
                                .innerJoin('supplierInvoice.id', 'purchaseInvoiceDescription.id_supplier_invoice')
                                .innerJoin('purchaseInvoiceDescription.id_items', 'items')
                                .where('supplierInvoice.id = :id', {id: parseInt(this.request.id)})
                                .getMany()
        if(!RESULT){
            return "la factura no existe"
        }
        return RESULT;
    }
}