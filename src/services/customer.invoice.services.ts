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
                return `stock insuficiente de ${element.items.description}`
            }
        }
        const data = getRepository(CustomerInvoice).create(this.requestBody);
        const saveData = await getRepository(CustomerInvoice).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(CustomerInvoice).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe la factura";
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(CustomerInvoice).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(CustomerInvoice).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe la factura";
        }
        const update = getRepository(CustomerInvoice).merge(result, this.requestBody);
        const saveUpdate = await getRepository(CustomerInvoice).save(update);
        return saveUpdate;
    }
}