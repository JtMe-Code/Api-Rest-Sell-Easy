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
        const RESULT = await getRepository(TypeExpense).findOne({description: this.requestBody.description});
        if(RESULT){
            return `Ya existe un tipo de gasto ${this.requestBody.description}`;
        }

        const DATA = getRepository(TypeExpense).create(this.requestBody);
        const SAVE_DATA = await getRepository(TypeExpense).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        const RESULT = await getRepository(TypeExpense).findOne({id: this.requestParam.id});
        if(!RESULT){
            return `no existe el tipo gasto`;
        }
        return RESULT;
    }

    async readAll():Promise<string | object[]>{
        const RESULT = await getRepository(TypeExpense).find();
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        const RESULT = await getRepository(TypeExpense).findOne({id: this.requestParam.id});
        if(!RESULT){
            return "no existe el tipo de gasto";
        }
        const UPDATE= getRepository(TypeExpense).merge(RESULT, this.requestBody);
        const SAVE_UPDATE = await getRepository(TypeExpense).save(UPDATE);
        return SAVE_UPDATE;
    }
}