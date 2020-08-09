import {Request, Response} from 'express';
import { PurchaseInvoiceDescriptionService } from '../services/purchase.invoice.description.services';

export const PurchaseInvoiceDescriptionControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new PurchaseInvoiceDescriptionService(req).create();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    readInvoiceDescription: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new PurchaseInvoiceDescriptionService(req).readInvoiceDescription();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new PurchaseInvoiceDescriptionService(req).readAll();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    }
}