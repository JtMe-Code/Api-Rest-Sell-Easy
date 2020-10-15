import {Request, Response} from 'express';
import { ReportService } from '../services/report.services';

export const ReportControllers = {
    customerInvoice: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ReportService(req).reportCustomerInvoice();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    supplierInvoice: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ReportService(req).reportSupplierInvoice();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    items: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ReportService(req).reportItems();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    expense: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ReportService(req).reportExpense();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    }
}