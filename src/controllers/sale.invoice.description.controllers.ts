import {Request, Response} from 'express';
import { SaleInvoiceDescriptionService } from '../services/sale.invoice.description.services';

export const SaleInvoiceDescriptionControllers = {
    readInvoiceDescription: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new SaleInvoiceDescriptionService(req).readInvoiceDescription();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    }
}