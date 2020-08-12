import { getRepository } from 'typeorm';
import { Request } from 'express';
import { ISaleInvoiceDescription } from '../interfaces/sale.invoice.description';
import { SaleInvoiceDescription } from '../entity/sale.invoice.description.entity';

// *CRU -D*

export class SaleInvoiceDescriptionService {
    private requestBody: ISaleInvoiceDescription[];
    private requestParam: any;
    private saleInvoiceDescription = SaleInvoiceDescription;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<ISaleInvoiceDescription | ISaleInvoiceDescription[]>{
        const data = getRepository(this.saleInvoiceDescription).create(this.requestBody);
        const saveData = await getRepository(this.saleInvoiceDescription).save(data);
        return saveData;
    }

    async readInvoiceDescription():Promise<string | ISaleInvoiceDescription[]>{
        const result = await getRepository(this.saleInvoiceDescription).find({customerInvoice: this.requestParam.customerInvoiceId});
        return result;
    }

    async readAll():Promise<string | ISaleInvoiceDescription[]>{
        const result = await getRepository(this.saleInvoiceDescription).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }
}