import { getRepository, In, Like } from 'typeorm';
import { Request } from 'express';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';
import { Items } from '../entity/items.entity';
import { Supplier } from '../entity/supplier.entity';
import { IRequestParams } from '../interfaces/requestParams';
import { IRequestQuery } from '../interfaces/requestQuery';

// *CRU -D*

export class SupplierInvoiceService {
    private body: SupplierInvoice;
    private reqParams: IRequestParams;
    private reqQuery: IRequestQuery;
    constructor(req: Request){
        this.body = req.body;
        this.reqParams = req.params;
        this.reqQuery = req.query;
    }
    
    async create():Promise<string | object>{
        let arrayItemsUpdate: [{id: number, stock: number, lastPurchasePrice: number}] = [{id:0, stock:0, lastPurchasePrice:0}];
        for (let i = 0; i < this.body.purchaseInvoiceDescription.length; i++) {
            let element = this.body.purchaseInvoiceDescription[i];
            let result = await getRepository(Items).findOne({id: element.id_items});
            if (result) {
                let newStock = result.stock + element.quantity;
                let newPurchasePrice = element.purchasePrice;
                arrayItemsUpdate.forEach(array => {
                    if (array.id == result.id) {
                        array.stock = array.stock + element.quantity;
                        array.lastPurchasePrice = newPurchasePrice;
                    } else {
                        arrayItemsUpdate.push({id: element.id_items, stock: newStock, lastPurchasePrice: newPurchasePrice});
                    }
                });
            }else{
                return `no existe el articulo ${element.items.description}`
            }
        }

        if(arrayItemsUpdate.length > 1){
            arrayItemsUpdate.shift();
            await getRepository(Items).save(arrayItemsUpdate);
        }
        
        const DATA = getRepository(SupplierInvoice).create(this.body);
        const SAVE_DATA = await getRepository(SupplierInvoice).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){  
            const RESULT = await getRepository(SupplierInvoice).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return `no existe la factura ${this.reqParams.id}`;
            }
            return RESULT;
        }
        return "consulta invalida";
        
    }

    async readAll():Promise<string | [SupplierInvoice[], number]>{
        if(typeof this.reqQuery.offset === "string" && typeof this.reqQuery.limit === "string"){
            let offset = parseInt(this.reqQuery.offset);
            let limit = parseInt(this.reqQuery.limit);
            if(offset < 0 || limit <= offset || isNaN(offset) || isNaN(limit)){
                return "consulta no valida";
            }
            const RESULT = await getRepository(SupplierInvoice).findAndCount({skip: offset, take: limit})
            if(RESULT[1] < 1){
                return "sin resultados";
            }
            return RESULT;
        }
        return "consulta no valida"
    }

    async update():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){  
            const RESULT = await getRepository(SupplierInvoice).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return `no existe la factura ${this.reqParams.id}`;
            }
            const UPDATE = getRepository(SupplierInvoice).merge(RESULT, this.body);
            const SAVE_UPDATE = await getRepository(SupplierInvoice).save(UPDATE);
            return SAVE_UPDATE;
        }
        return "consulta invalida";        
    }

    async search():Promise<string | object[]>{
        if(typeof this.reqParams.search === "string"){
            const SEARCH = this.reqParams.search.toString();
            const RESULT = await getRepository(Supplier).find({where: [
                {name: Like(`%${SEARCH}%`)},
                {identification: Like(`%${SEARCH}%`)}
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
        return "consulta invalida";
    }
    
}
