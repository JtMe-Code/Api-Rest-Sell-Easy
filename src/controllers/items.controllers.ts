import {Request, Response} from 'express';
import { ItemsService } from '../services/items.services';

export const ItemsControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new ItemsService(req).create();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new ItemsService(req).read();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new ItemsService(req).readAll();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        let outcome = await new ItemsService(req).update();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    }
}