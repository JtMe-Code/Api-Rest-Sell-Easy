import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import { Expense } from '../entity/expense.entity';
import { IResourceRequest } from '../interfaces/resourceRequest';

// *CRU -D*

export class ExpenseService {
    private body: Expense;
    private request: IResourceRequest;
    constructor(req: Request){
        this.body = req.body;
        this.request.id = req.params.id;
        this.request.search = req.params.search;
        this.request.offset = req.query.offset;
        this.request.limit = req.query.limit;
    }
    
    async create():Promise<string | object>{
        const DATA = getRepository(Expense).create(this.body);
        const SAVE_DATA = await getRepository(Expense).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        if(typeof this.request.id === "undefined"){
            return "consulta no valida"
        }
        const RESULT = await getRepository(Expense).findOne({id: parseInt(this.request.id)});
        if(!RESULT){
            return `no existe el gasto`;
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        let offset = parseInt(this.request.offset);
        let limit = parseInt(this.request.limit);
        if(offset < 0 || limit < offset){
            return "consulta no valida";
        }
        const RESULT = await getRepository(Expense).find({skip: offset, take: limit})
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        if(typeof this.request.id === "undefined"){
            return "consulta no valida"
        }
        const RESULT = await getRepository(Expense).findOne({id: parseInt(this.request.id)});
        if(!RESULT){
            return `no existe el gasto`;
        }
        const UPDATE = getRepository(Expense).merge(RESULT, this.body);
        const SAVE_UPDATE = await getRepository(Expense).save(UPDATE);
        return SAVE_UPDATE;
    }

    async search():Promise<string | object[]>{
        const RESULT = await getRepository(Expense).find({description: Like(`%${this.request.search}%`)});
        if(RESULT.length < 1){
        return "sin resultados";
        }
        return RESULT;
    }
    
}