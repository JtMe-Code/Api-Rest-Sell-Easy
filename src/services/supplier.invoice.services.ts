import { getRepository, MoreThanOrEqual } from 'typeorm';
import { Request } from 'express';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';
import { Items } from '../entity/items.entity';

// *CRU -D*

export class SupplierInvoiceService {
    private requestBody: SupplierInvoice;
    private requestParam: any;
    private supplierInvoice = SupplierInvoice;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        for (let i = 0; i < this.requestBody.purchaseInvoiceDescription.length; i++) {
            let element = this.requestBody.purchaseInvoiceDescription[i];
            let result = await getRepository(Items).findOne({id: element.id_items, stock: MoreThanOrEqual(element.quantity)});
            if (result) {
                let newStock = result.stock - element.quantity;
                let update = getRepository(Items).merge(result, {stock: newStock});
                await getRepository(Items).save(update);
            }else{
                return `stock insuficiente de ${element.items.description}`
            }
        }
        const data = getRepository(this.supplierInvoice).create(this.requestBody);
        const saveData = await getRepository(this.supplierInvoice).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(this.supplierInvoice).findOne({id: this.requestParam.id});
        if(!result){
            return `no existe la factura ${this.requestParam.id}`;
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(this.supplierInvoice).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(this.supplierInvoice).findOne({id: this.requestParam.id});
        if(!result){
            return `no existe la factura ${this.requestParam.id}`;
        }
        const update = getRepository(this.supplierInvoice).merge(result, this.requestBody);
        const saveUpdate = await getRepository(this.supplierInvoice).save(update);
        return saveUpdate;
    }
}
