import {Request, Response} from 'express';
import { PurchaseInvoiceDescriptionService } from '../services/purchase.invoice.description.services';

export const PurchaseInvoiceDescriptionControllers = {
    readInvoiceDescription: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new PurchaseInvoiceDescriptionService(req).readInvoiceDescription();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    }
}