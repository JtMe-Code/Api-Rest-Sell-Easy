import {Request, Response} from 'express';
import {CustomerInvoiceService} from '../services/customer.invoice.services';

export const CustomerInvoiceControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerInvoiceService(req).create();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerInvoiceService(req).read();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerInvoiceService(req).readAll();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json({list: OUTCOME[0], count: OUTCOME[1]});
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerInvoiceService(req).update();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    search: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerInvoiceService(req).search();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    }
}