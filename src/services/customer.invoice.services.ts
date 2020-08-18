import { getRepository, MoreThanOrEqual } from 'typeorm';
import { Request } from 'express';
import { CustomerInvoice } from '../entity/customer.invoice.entity';
import { Items } from '../entity/items.entity';

// *CRU -D*

export class CustomerInvoiceService {
    private requestBody: CustomerInvoice;
    private requestParam: any;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        for (let i = 0; i < this.requestBody.saleInvoiceDescription.length; i++) {
            let element = this.requestBody.saleInvoiceDescription[i];
            let result = await getRepository(Items).findOne({id: element.id_items, stock: MoreThanOrEqual(element.quantity)});
            if (result) {
                let newStock = result.stock - element.quantity;
                let update = getRepository(Items).merge(result, {stock: newStock});
                await getRepository(Items).save(update);
            }else{
                return `stock insuficiente del articulo ${element.id_items}`
            }
        }
        const DATA = getRepository(CustomerInvoice).create(this.requestBody);
        const SAVE_DATA = await getRepository(CustomerInvoice).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(CustomerInvoice).findOne({id: this.requestParam.id});
        if(!RESULT){
            return "no existe la factura";
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        const RESULT = await getRepository(CustomerInvoice).find();
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(CustomerInvoice).findOne({id: this.requestParam.id});
        if(!RESULT){
            return "no existe la factura";
        }
        const UPDATE = getRepository(CustomerInvoice).merge(RESULT, this.requestBody);
        const SAVE_UPDATE = await getRepository(CustomerInvoice).save(UPDATE);
        return SAVE_UPDATE;
    }
}