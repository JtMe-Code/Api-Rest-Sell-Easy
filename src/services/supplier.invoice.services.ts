import { getRepository, In, Like } from 'typeorm';
import { Request } from 'express';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';
import { Items } from '../entity/items.entity';
import { Supplier } from '../entity/supplier.entity';
import { IResourceRequest } from '../interfaces/resourceRequest';

// *CRU -D*

export class SupplierInvoiceService {
    private body: SupplierInvoice;
    private request: IResourceRequest;
    constructor(req: Request){
        this.body = req.body;
        this.request.id = parseInt(req.params.id);
        this.request.search = req.params.search;
        this.request.offset = req.query.offset;
        this.request.limit = req.query.limit;
    }
    
    async create():Promise<string | object>{
        for (let i = 0; i < this.body.purchaseInvoiceDescription.length; i++) {
            let element = this.body.purchaseInvoiceDescription[i];
            let result = await getRepository(Items).findOne({id: element.id_items});
            if (result) {
                let newStock = result.stock + element.quantity;
                let newPurchasePrice = element.purchasePrice;
                let update = getRepository(Items).merge(result, {stock: newStock, lastPurchasePrice: newPurchasePrice});
                await getRepository(Items).save(update);
            }else{
                return `no existe el articulo ${element.items.description}`
            }
        }
        const DATA = getRepository(SupplierInvoice).create(this.body);
        const SAVE_DATA = await getRepository(SupplierInvoice).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(SupplierInvoice).findOne({id: this.request.id});
        if(!RESULT){
            return `no existe la factura ${this.request.id}`;
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        let offset = parseInt(this.request.offset);
        let limit = parseInt(this.request.limit);
        if(offset < 0 || limit < offset){
            return "consulta no valida";
        }
        const RESULT = await getRepository(SupplierInvoice).find({skip: offset, take: limit})
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(SupplierInvoice).findOne({id: this.request.id});
        if(!RESULT){
            return `no existe la factura ${this.request.id}`;
        }
        const UPDATE = getRepository(SupplierInvoice).merge(RESULT, this.body);
        const SAVE_UPDATE = await getRepository(SupplierInvoice).save(UPDATE);
        return SAVE_UPDATE;
    }

    async search():Promise<string | object[]>{
        const RESULT = await getRepository(Supplier).find({where: [
                                                        {name: Like(`%${this.request.search}%`)},
                                                        {identification: Like(`%${this.request.search}%`)}
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
