import {Request, Response} from 'express';
import { ItemsService } from '../services/items.services';

export const ItemsControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ItemsService(req).create();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ItemsService(req).read();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ItemsService(req).readAll();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json({list: OUTCOME[0], count: OUTCOME[1]});
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ItemsService(req).update();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    search: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ItemsService(req).search();
        if(typeof OUTCOME === "string"){
            return res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    }
}