import { getRepository, MoreThanOrEqual, Like, In } from 'typeorm';
import { Request } from 'express';
import { CustomerInvoice } from '../entity/customer.invoice.entity';
import { Items } from '../entity/items.entity';
import { Customer } from '../entity/customer.entity';
import { IResourceRequest } from '../interfaces/resourceRequest';

// *CRU -D*

export class CustomerInvoiceService {
    private body: CustomerInvoice;
    private request: IResourceRequest;
    constructor(req: Request){
        this.body = req.body;
        this.request = req.params;
    }
    
    async create():Promise<string | object>{
        for (let i = 0; i < this.body.saleInvoiceDescription.length; i++) {
            let element = this.body.saleInvoiceDescription[i];
            let result = await getRepository(Items).findOne({id: element.id_items, stock: MoreThanOrEqual(element.quantity)});
            if (result) {
                let newStock = result.stock - element.quantity;
                let update = getRepository(Items).merge(result, {stock: newStock});
                await getRepository(Items).save(update);
            }else{
                return `stock insuficiente del articulo ${element.id_items}`
            }
        }
        const DATA = getRepository(CustomerInvoice).create(this.body);
        const SAVE_DATA = await getRepository(CustomerInvoice).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        if(typeof this.request.id === "string" && parseInt(this.request.id)> 0){  
            const RESULT = await getRepository(CustomerInvoice).findOne({id: parseInt(this.request.id)});
            if(!RESULT){
                return "no existe la factura";
            }
            return RESULT;
        }
        return "consulta invalida";          
    }

    async readAll():Promise<string | object[]>{
        let offset = parseInt(this.request.offset);
        let limit = parseInt(this.request.limit);
        if(offset < 0 || limit < offset){
            return "consulta no valida";
        }
        const RESULT = await getRepository(CustomerInvoice).find({skip: offset, take: limit})
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        if(typeof this.request.id === "string" && parseInt(this.request.id)> 0){  
            const RESULT = await getRepository(CustomerInvoice).findOne({id: parseInt(this.request.id)});
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
        const RESULT = await getRepository(Customer).find({where: [
                                                        {name: Like(`%${this.request.search}%`)},
                                                        {identification: Like(`%${this.request.search}%`)}
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
    
}