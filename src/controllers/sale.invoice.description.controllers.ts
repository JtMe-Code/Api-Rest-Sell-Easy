import {Request, Response} from 'express';
import { SaleInvoiceDescriptionService } from '../services/sale.invoice.description.services';

export const SaleInvoiceDescriptionControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new SaleInvoiceDescriptionService(req).create();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    readInvoiceDescription: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new SaleInvoiceDescriptionService(req).readInvoiceDescription();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new SaleInvoiceDescriptionService(req).readAll();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    }
}