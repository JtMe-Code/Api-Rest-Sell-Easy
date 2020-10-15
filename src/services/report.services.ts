import { Between, getRepository, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { Request } from 'express';
import { IRequestQuery } from '../interfaces/requestQuery'
import { CustomerInvoice } from '../entity/customer.invoice.entity';
import { SupplierInvoice } from '../entity/supplier.invoice.entity';
import { Items } from '../entity/items.entity';
import { Expense } from '../entity/expense.entity';

export class ReportService {
    private query: IRequestQuery;
    private regexDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    constructor(req: Request) {
        this.query = req.query;
    }

    async reportCustomerInvoice():Promise<string | CustomerInvoice[]> {
        console.log(this.query.startDate, this.query.endDate);
        if (this.regexDate.test(this.query.startDate) && this.regexDate.test(this.query.endDate)) {
            let endDate = this.query.endDate.concat(' 23:59:59.999999');
            const RESULT = await getRepository(CustomerInvoice).find({
                relations: ["customer"],
                select: ["id", "customer", "totalValue", "createdAt"],
                where: {createdAt: Between(this.query.startDate, endDate)},
                order: {createdAt: "ASC"}});
                if(RESULT.length > 0){
                    return RESULT;
                }else{
                    return "sin resultados";
                }
        }
        return "consulta no valida"
    }

    async reportSupplierInvoice():Promise<string | SupplierInvoice[]> {
        let endDate = this.query.endDate.concat(' 23:59:59.999999');
        if (this.regexDate.test(this.query.startDate) && this.regexDate.test(this.query.endDate)) {
            const RESULT = await getRepository(SupplierInvoice).find({
                relations: ["supplier"],
                select: ["id", "supplier", "totalValue", "createdAt"],
                where: {createdAt: Between(this.query.startDate, endDate)}, 
                order: {createdAt: "ASC"}});
                if(RESULT.length > 0){
                    return RESULT;
                }else{
                    return "sin resultados";
                }
        }
        return "consulta no valida"
    }

    async reportItems():Promise<string | Items[]> {
        const RESULT = await getRepository(Items).find({
            select: ["id", "description", "lastPurchasePrice", "lastSalePrice", "stock"],
            order:{ description: "DESC"}});
            if(RESULT.length > 0){
                return RESULT;
            }else{
                return "sin resultados";
            }
    }

    async reportExpense():Promise<string | Expense[]> {
        let endDate = this.query.endDate.concat(' 23:59:59.999999');
        if (this.regexDate.test(this.query.startDate) && this.regexDate.test(this.query.endDate)) {
            const RESULT = await getRepository(Expense).find({
                relations: ["typeExpense"],
                select: ["description", "typeExpense", "value", "createdAt", "typeExpense"],
                where: {createdAt: Between(this.query.startDate, endDate)},
                order: {createdAt: "ASC"}});
                if(RESULT.length > 0){
                    return RESULT;
                }else{
                    return "sin resultados";
                }
        }
        return "consulta no valida"
    }
}