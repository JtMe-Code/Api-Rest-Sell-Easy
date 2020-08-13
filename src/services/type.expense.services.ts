import { getRepository } from 'typeorm';
import { Request } from 'express';
import { TypeExpense } from '../entity/type.expense.entity';

// *CRU -D*

export class TypeExpenseService {
    private requestBody: TypeExpense;
    private requestParam: any;
    private typeExpense = TypeExpense;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | object>{
        const result = await getRepository(this.typeExpense).find({description: this.requestBody.description});
        if(result){
            return `Ya existe un tipo de gasto ${this.requestBody.description}`;
        }

        const data = getRepository(this.typeExpense).create(this.requestBody);
        const saveData = await getRepository(this.typeExpense).save(data);
        return saveData;
    }

    async read():Promise<string | object>{
        const result = await getRepository(this.typeExpense).findOne({id: this.requestParam.id});
        if(!result){
            return `no existe el tipo gasto`;
        }
        return result;
    }

    async readAll():Promise<string | object[]>{
        const result = await getRepository(this.typeExpense).find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | object>{
        const result = await getRepository(this.typeExpense).findOne({id: this.requestParam.id});
        if(!result){
            return "no existe el tipo de gasto";
        }
        const update = getRepository(this.typeExpense).merge(result, this.requestBody);
        const saveUpdate = await getRepository(this.typeExpense).save(update);
        return saveUpdate;
    }
}