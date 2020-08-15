import { getRepository } from 'typeorm';
import { Request } from 'express';
import { TypeExpense } from '../entity/type.expense.entity';

// *CRU -D*

export class TypeExpenseService {
    private requestBody: TypeExpense;
    private requestParam: any;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        const result = await getRepository(TypeExpense).findOne({description: this.requestBody.description});
        if(result){
            return `Ya existe un tipo de gasto ${this.requestBody.description}`;
        }

        const data = getRepository(TypeExpense).create(this.requestBody);
        const saveData = await getRepository(TypeExpense).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(TypeExpense).findOne({id: this.requestParam.id});
        if(!result){
            return `no existe el tipo gasto`;
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(TypeExpense).find();
        if(result.length < 1){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(TypeExpense).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el tipo de gasto";
        }
        const update = getRepository(TypeExpense).merge(result, this.requestBody);
        const saveUpdate = await getRepository(TypeExpense).save(update);
        return saveUpdate;
    }
}