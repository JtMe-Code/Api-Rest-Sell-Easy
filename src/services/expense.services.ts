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
        const data = getRepository(Expense).create(this.requestBody);
        const saveData = await getRepository(Expense).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(Expense).findOne({id: this.requestParam.id});
        if(!result){
            return `no existe el gasto ${this.requestParam}`;
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(Expense).find();
        if(result.length < 1){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(Expense).findOne({id: this.requestParam.id});
        if(!result){
            return `no existe el gasto ${this.requestParam}`;
        }
        const update = getRepository(Expense).merge(result, this.requestBody);
        const saveUpdate = await getRepository(Expense).save(update);
        return saveUpdate;
    }
}