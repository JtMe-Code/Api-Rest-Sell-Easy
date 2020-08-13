import {Request, Response} from 'express';
import { PurchaseInvoiceDescriptionService } from '../services/purchase.invoice.description.services';

export const PurchaseInvoiceDescriptionControllers = {
    readInvoiceDescription: async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new PurchaseInvoiceDescriptionService(req).readInvoiceDescription();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    }
}