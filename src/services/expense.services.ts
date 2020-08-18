import { getRepository } from 'typeorm';
import { Request } from 'express';
import { Expense } from '../entity/expense.entity';

// *CRU -D*

export class ExpenseService {
    private requestBody: Expense;
    private requestParam: any;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        const DATA = getRepository(Expense).create(this.requestBody);
        const SAVE_DATA = await getRepository(Expense).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(Expense).findOne({id: this.requestParam.id});
        if(!RESULT){
            return `no existe el gasto ${this.requestParam}`;
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        const RESULT = await getRepository(Expense).find();
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(Expense).findOne({id: this.requestParam.id});
        if(!RESULT){
            return `no existe el gasto ${this.requestParam}`;
        }
        const UPDATE = getRepository(Expense).merge(RESULT, this.requestBody);
        const SAVE_UPDATE = await getRepository(Expense).save(UPDATE);
        return SAVE_UPDATE;
    }
}