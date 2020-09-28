import { getRepository, Like } from 'typeorm';
import { Request } from 'express';
import { Expense } from '../entity/expense.entity';
import { IRequestParams } from '../interfaces/requestParams';
import { IRequestQuery } from '../interfaces/requestQuery';

// *CRU -D*

export class ExpenseService {
    private body: Expense;
    private reqParams: IRequestParams;
    private reqQuery: IRequestQuery;
    constructor(req: Request){
        this.body = req.body;
        this.reqParams = req.params;
        this.reqQuery = req.query;
    }
    
    async create():Promise<string | object>{
        const DATA = getRepository(Expense).create(this.body);
        const SAVE_DATA = await getRepository(Expense).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){
            const RESULT = await getRepository(Expense).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return `no existe el gasto`;
            }
            return RESULT;
        }
        return "consulta invalida";
    }

    async readAll():Promise<string | [Expense[], number]>{
        if(typeof this.reqQuery.offset === "string" && typeof this.reqQuery.limit === "string"){
            let offset = parseInt(this.reqQuery.offset);
            let limit = parseInt(this.reqQuery.limit);
            if(offset < 0 || limit < 1 || isNaN(offset) || isNaN(limit)){
                return "consulta no valida";
            }
            const RESULT = await getRepository(Expense).findAndCount({order: {createdAt: "DESC"}, skip: offset, take: limit});
            if(RESULT[1] < 1){
                return "sin resultados";
            }
            return RESULT;
        }
        return "consulta no valida";
        
    }

    async update():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){
            
            const RESULT = await getRepository(Expense).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return `no existe el gasto`;
            }
            const UPDATE = getRepository(Expense).merge(RESULT, this.body);
            const SAVE_UPDATE = await getRepository(Expense).save(UPDATE);
            return SAVE_UPDATE;
        }
        return "consulta invalida";
    }

    async search():Promise<string | object[]>{
        if(typeof this.reqParams.search === "string"){
            const SEARCH = this.reqParams.search.toString();
            const RESULT = await getRepository(Expense).find({description: Like(`%${SEARCH}%`)});
            if(RESULT.length < 1){
            return "sin resultados";
            }
            return RESULT;
        }
        return "consulta invalida";
    }
    
}