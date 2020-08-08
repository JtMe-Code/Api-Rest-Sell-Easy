import { getRepository } from 'typeorm';
import { Request } from 'express';
import { CustomerInvoice } from '../entity/customer.invoice.entity';
import { ICustomerInvoice } from '../interfaces/customer.invoice';

// *CRU -D*

export class CustomerInvoiceService {
    private requestBody: ICustomerInvoice;
    private requestParam: any;
    private customerInvoice = getRepository(CustomerInvoice);
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<ICustomerInvoice>{
        const data = this.customerInvoice.create(this.requestBody);
        const saveData = await this.customerInvoice.save(data);
        return saveData;
    }

    async read():Promise<string | ICustomerInvoice>{
        const result = await this.customerInvoice.findOne({id: this.requestParam.id});
        if(!result){
            return "no existe la factura";
        }
        return result;
    }

    async readAll():Promise<string | ICustomerInvoice[]>{
        const result = await this.customerInvoice.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | ICustomerInvoice>{
        const result = await this.customerInvoice.findOne({id: this.requestParam.id});
        if(!result){
            return "no existe la factura";
        }
        const update = this.customerInvoice.merge(result, this.requestBody);
        const saveUpdate = await this.customerInvoice.save(update);
        return saveUpdate;
    }
}