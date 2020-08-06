import {Request, Response} from 'express';
import {CustomerInvoiceService} from '../services/customer.invoice.services';

export const CustomerInvoiceControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new CustomerInvoiceService(req).create();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new CustomerInvoiceService(req).read();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new CustomerInvoiceService(req).readAll();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new CustomerInvoiceService(req).update();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    }
}