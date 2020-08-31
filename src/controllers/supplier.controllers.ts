import {Request, Response} from 'express';
import { SupplierService } from '../services/supplier.services';

export const SupplierControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new SupplierService(req).create();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new SupplierService(req).read();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new SupplierService(req).readAll();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json({list: OUTCOME[0], count: OUTCOME[1]});
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new SupplierService(req).update();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    search: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new SupplierService(req).search();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    }
}