import {Request, Response} from 'express';
import { SupplierService } from '../services/supplier.services';

export const SupplierControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new SupplierService(req).create();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new SupplierService(req).read();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new SupplierService(req).readAll();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new SupplierService(req).update();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    }
}