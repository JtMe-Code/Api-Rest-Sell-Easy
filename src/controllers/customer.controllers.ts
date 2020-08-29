import {Request, Response} from 'express';
import {CustomerService} from '../services/customer.services';

export const CustomerControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerService(req).create();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerService(req).read();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerService(req).readAll();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerService(req).update();
        if(typeof OUTCOME === "string"){
            res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    search: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new CustomerService(req).search();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    }
}

