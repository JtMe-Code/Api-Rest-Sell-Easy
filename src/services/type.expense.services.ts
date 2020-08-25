import { getRepository } from 'typeorm';
import { Request } from 'express';
import { TypeExpense } from '../entity/type.expense.entity';
import { IRequestParams } from '../interfaces/requestParams';

// *CRU -D*

export class TypeExpenseService {
    private body: TypeExpense;
    private reqParams: IRequestParams;
    constructor(req: Request){
        this.body = req.body;
        this.reqParams = req.params;
    }
    
    async create():Promise<string | object>{
        const RESULT = await getRepository(TypeExpense).findOne({description: this.body.description});
        if(RESULT){
            return `Ya existe un tipo de gasto ${this.body.description}`;
        }

        const DATA = getRepository(TypeExpense).create(this.body);
        const SAVE_DATA = await getRepository(TypeExpense).save(DATA);
        return SAVE_DATA;
    }

    async read():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){
            const RESULT = await getRepository(TypeExpense).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return `no existe el tipo gasto`;
            }
            return RESULT;
        }
        return "consulta invalida";        
    }

    async readAll():Promise<string | object[]>{
        const RESULT = await getRepository(TypeExpense).find();
        if(RESULT.length < 1){
            return "sin resultados";
        }
        return RESULT;
    }

    async update():Promise<string | object>{
        if(typeof this.reqParams.id === "string" && parseInt(this.reqParams.id)> 0){  
            const RESULT = await getRepository(TypeExpense).findOne({id: parseInt(this.reqParams.id)});
            if(!RESULT){
                return "no existe el tipo de gasto";
            }
            const UPDATE= getRepository(TypeExpense).merge(RESULT, this.body);
            const SAVE_UPDATE = await getRepository(TypeExpense).save(UPDATE);
            return SAVE_UPDATE;
        }
        return "consulta invalida";
    }
}