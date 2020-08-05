import {Request, Response} from 'express';
import {CustomerService} from '../services/customer.services';

export const CustomerControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new CustomerService(req).create();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new CustomerService(req).read();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new CustomerService(req).readAll();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new CustomerService(req).update();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    }
}