import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import { Supplier } from '../entity/supplier.entity';
import { IResourceRequest } from '../interfaces/resourceRequest';

// *CRU -D*

export class SupplierService {
    private body: Supplier;
    private request: IResourceRequest;
    constructor(req: Request){
        this.body = req.body;
        this.request.Id = parseInt(req.params.id);
        this.request.Search = req.params.search;
        this.request.Offset = req.query.offset;
        this.request.Limit = req.query.limit;
    }
    
    async create():Promise<string | object>{
        const RESULT = await getRepository(Supplier).findOne({
            where: {typeIdentification: this.body.id_type_identification, identification: this.body.identification}
        });
        if(RESULT){
            return `Ya existe un proveedor con ${this.body.id_type_identification} ${this.body.identification}`;
        }

        const DATA = getRepository(Supplier).create(this.body);
        const SAVE_DATA = await getRepository(Supplier).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(Supplier).findOne({id: this.request.Id});
        if(!RESULT){
            return "no existe el proveedor";
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        let offset = parseInt(this.request.Offset);
        let limit = parseInt(this.request.Limit);
        if(offset < 0 && limit < offset){
            return "consulta no valida";
        }
        const RESULT = await getRepository(Supplier).find({skip: offset, take: limit})
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(Supplier).findOne({id: this.request.Id});
        if(!RESULT){
            return "no existe el proveedor";
        }
        const UPDATE = getRepository(Supplier).merge(RESULT, this.body);
        const SAVE_UPDATE = await getRepository(Supplier).save(UPDATE);
        return SAVE_UPDATE;
    }

    async search():Promise<string | object[]>{
        const RESULT = await getRepository(Supplier).find({where: [
            {name: Like(`%${this.request.Search}%`)},
            {identification: Like(`%${this.request.Search}%`)}
        ]});
        if(RESULT.length < 1){
        return "sin resultados";
        }
        return RESULT;
    }
    
}