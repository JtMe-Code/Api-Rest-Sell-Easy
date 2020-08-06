import {getRepository} from 'typeorm';
import { Request } from 'express';
import { ISaleInvoiceDescription } from '../interfaces/sale.invoice.description';
import { SaleInvoiceDescription } from '../entity/sale.invoice.description.entity';

// *CRU -D*

export class SaleInvoiceDescriptionService {
    private requestBody: ISaleInvoiceDescription;
    private requestParam: any;
    private saleInvoiceDescription = getRepository(SaleInvoiceDescription);
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<ISaleInvoiceDescription | ISaleInvoiceDescription[]>{
        const data = this.saleInvoiceDescription.create(this.requestBody);
        const saveData = await this.saleInvoiceDescription.save(data);
        return saveData;
    }

    async read():Promise<string | ISaleInvoiceDescription>{
        const result = await this.saleInvoiceDescription.findOne({id: this.requestParam});
        if(!result){
            return "gasto no encontrado";
        }
        return result;
    }

    async readAll():Promise<string | ISaleInvoiceDescription[]>{
        const result = await this.saleInvoiceDescription.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | ISaleInvoiceDescription>{
        const result = await this.saleInvoiceDescription.findOne({id: this.requestParam});
        if(!result){
            return "gasto no encontrado";
        }
        const update = this.saleInvoiceDescription.merge(result, this.requestBody);
        const saveUpdate = await this.saleInvoiceDescription.save(update);
        return saveUpdate;
    }
}