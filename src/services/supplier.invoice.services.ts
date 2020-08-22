import { getRepository, In, Like } from 'typeorm';
import { Request } from 'express';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';
import { Items } from '../entity/items.entity';
import { Supplier } from '../entity/supplier.entity';

// *CRU -D*

export class SupplierInvoiceService {
    private requestBody: SupplierInvoice;
    private requestParam: any;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        for (let i = 0; i < this.requestBody.purchaseInvoiceDescription.length; i++) {
            let element = this.requestBody.purchaseInvoiceDescription[i];
            let result = await getRepository(Items).findOne({id: element.id_items});
            if (result) {
                let newStock = result.stock + element.quantity;
                let update = getRepository(Items).merge(result, {stock: newStock});
                await getRepository(Items).save(update);
            }else{
                return `no existe el articulo ${element.items.description}`
            }
        }
        const DATA = getRepository(SupplierInvoice).create(this.requestBody);
        const SAVE_DATA = await getRepository(SupplierInvoice).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(SupplierInvoice).findOne({id: this.requestParam.id});
        if(!RESULT){
            return `no existe la factura ${this.requestParam.id}`;
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        const RESULT = await getRepository(SupplierInvoice).find();
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(SupplierInvoice).findOne({id: this.requestParam.id});
        if(!RESULT){
            return `no existe la factura ${this.requestParam.id}`;
        }
        const UPDATE = getRepository(SupplierInvoice).merge(RESULT, this.requestBody);
        const SAVE_UPDATE = await getRepository(SupplierInvoice).save(UPDATE);
        return SAVE_UPDATE;
    }

    async search():Promise<string | object[]>{
        const RESULT = await getRepository(Supplier).find({where: [
                                                        {name: Like(`%${this.requestParam.search}%`)},
                                                        {identification: Like(`%${this.requestParam.search}%`)}
                                                    ]});
        if(RESULT.length < 1){
            return "sin resultados";
        }
        const RESULT_MAP:number[] = RESULT.map((element) =>{
            let newArray:number[] = [];
            return newArray.push(element.id);            
        })
        const RESULT_INVOCE = await getRepository(SupplierInvoice).find({id_supplier: In(RESULT_MAP)});
        return RESULT_INVOCE;
    }
    
}
