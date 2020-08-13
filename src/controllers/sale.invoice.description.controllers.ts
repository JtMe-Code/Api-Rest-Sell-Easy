import {Request, Response} from 'express';
import { SaleInvoiceDescriptionService } from '../services/sale.invoice.description.services';

export const SaleInvoiceDescriptionControllers = {
    readInvoiceDescription: async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new SaleInvoiceDescriptionService(req).readInvoiceDescription();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    }
}