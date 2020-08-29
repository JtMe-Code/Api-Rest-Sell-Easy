import { getRepository, MoreThanOrEqual, Like, In } from 'typeorm';
import { Request } from 'express';
import { CustomerInvoice } from '../entity/customer.invoice.entity';
import { Items } from '../entity/items.entity';
import { Customer } from '../entity/customer.entity';
import { IRequestParams } from '../interfaces/requestParams';
import { IRequestQuery } from '../interfaces/requestQuery';

// *CRU -D*

export class CustomerInvoiceService {
    private body: CustomerInvoice;
    private reqParams: IRequestParams;
    private reqQuery: IRequestQuery;
    constructor(req: Request){
        this.body = req.body;
        this.reqParams = req.params;
        this.reqQuery = req.query;
    }
    
    async create():Promise<string | object>{
        let arrayItemsUpdate: [{}] = [{}];
        for (let i = 0; i < this.body.saleInvoiceDescription.length; i++) {
            let element = this.body.saleInvoiceDescription[i];
            let result = await getRepository(Items).findOne({id: element.id_items, stock: MoreThanOrEqual(element.quantity)});
            if (result) {
                let newStock = result.stock - element.quantity;
                arrayItemsUpdate.push({id: element.id_items, stock: newStock});
            }else{
                return `stock insuficiente del articulo ${element.id_items}`
            }
        }
        
        if(arrayItemsUpdate.length > 1){
            arrayItemsUpdate.shift();        
            arrayItemsUpdate.forEach(async element => {            
            await getRepository(Items).save(element);
        });}

        const DATA = getRepository(CustomerInvoice).create(this.body);
        const SAVE_DATA = await getRepository(CustomerInvoice).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){  
            const RESULT = await getRepository(CustomerInvoice).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "no existe la factura";
            }
            return RESULT;
        }
        return "consulta invalida";
    }

    async readAll():Promise<string | object[]>{
        if(typeof this.reqQuery.offset === "string" && typeof this.reqQuery.limit === "string"){
            let offset = parseInt(this.reqQuery.offset);
            let limit = parseInt(this.reqQuery.limit);
            if(offset < 0 || limit <= offset || isNaN(offset) || isNaN(limit)){
                return "consulta no valida";
            }
            const RESULT = await getRepository(CustomerInvoice).find({skip: offset, take: limit})
            if(RESULT.length < 1){
                return "sin resultados";
            }
            return RESULT;
        }
        return "consulta no valida";
    }

    async update():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){  
            const RESULT = await getRepository(CustomerInvoice).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "no existe la factura";
            }
            const UPDATE = getRepository(CustomerInvoice).merge(RESULT, this.body);
            const SAVE_UPDATE = await getRepository(CustomerInvoice).save(UPDATE);
            return SAVE_UPDATE;
        }
        return "consulta invalida";
    }

    async search():Promise<string | object[]>{
        if(typeof this.reqParams.search === "string"){
            const SEARCH = this.reqParams.search.toString();
            const RESULT = await getRepository(Customer).find({where: [
                {name: Like(`%${SEARCH}%`)},
                {identification: Like(`%${SEARCH}%`)}
            ]})
            if(RESULT.length < 1){
            return "sin resultados";
            }
            const RESULT_MAP:number[] = RESULT.map((element) =>{
            let newArray:number[] = [];
            return newArray.push(element.id);
            })
            const RESULT_INVOCE = await getRepository(CustomerInvoice).find({id_customer: In(RESULT_MAP)});
            return RESULT_INVOCE;
        }
        return "consulta invalida";         
    }    
}