import { Request } from 'express';
import { IExpense } from '../interfaces/expense';
import { Expense } from '../entity/expense.entity';

// *CRU -D*

export class ExpenseService {
    private requestBody: IExpense;
    private requestParam: any;
    private expense = Expense;
    constructor(req: Request){
        this.requestBody = req.body;
        this.requestParam = req.params;
    }
    
    async create():Promise<string | IExpense>{
        const data = this.expense.create(this.requestBody);
        const saveData = await this.expense.save(data);
        return saveData;
    }

    async read():Promise<string | IExpense>{
        const result = await this.expense.findOne({id: this.requestParam.id});
        if(!result){
            return `no existe el gasto ${this.requestParam}`;
        }
        return result;
    }

    async readAll():Promise<string | IExpense[]>{
        const result = await this.expense.find();
        if(!result){
            return "sin resultados";
        }
        return result;
    }

    async update():Promise<string | IExpense>{
        const result = await this.expense.findOne({id: this.requestParam.id});
        if(!result){
            return `no existe el gasto ${this.requestParam}`;
        }
        const update = this.expense.merge(result, this.requestBody);
        const saveUpdate = await this.expense.save(update);
        return saveUpdate;
    }
}