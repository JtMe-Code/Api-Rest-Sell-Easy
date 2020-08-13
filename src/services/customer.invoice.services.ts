import { getRepository, LessThanOrEqual } from 'typeorm';
import { Request } from 'express';
import { CustomerInvoice } from '../entity/customer.invoice.entity';
import { ICustomerInvoice } from '../interfaces/customer.invoice';
import { Items } from '../entity/items.entity';

// *CRU -D*

export class CustomerInvoiceService {
    private requestBody: CustomerInvoice;
    private requestParam: any;
    private customerInvoice = CustomerInvoice;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        for (let i = 0; i < this.requestBody.saleInvoiceDescription.length; i++) {
            let element = this.requestBody.saleInvoiceDescription[i];
            let result = await getRepository(Items).find({id: element.id_items, stock: LessThanOrEqual(element.quantity)});
            if (!result) {
                return `no hay la cantidad suficiente de ${element.items.description}`
            }
        }
        const data = getRepository(this.customerInvoice).create(this.requestBody);
        const saveData = await getRepository(this.customerInvoice).save(data);
        return saveData;
    }

    async read():Promise<string | ICustomerInvoice>{
        const result = await getRepository(this.customerInvoice).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe la factura";
        }
        return result;
    }

    async readAll():Promise<string | ICustomerInvoice[]>{
        const result = await getRepository(this.customerInvoice).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | ICustomerInvoice>{
        const result = await getRepository(this.customerInvoice).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe la factura";
        }
        const update = getRepository(this.customerInvoice).merge(result, this.requestBody);
        const saveUpdate = await getRepository(this.customerInvoice).save(update);
        return saveUpdate;
    }
}