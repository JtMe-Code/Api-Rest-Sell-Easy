import {Request, Response} from 'express';
import { TypeIdentificationService } from '../services/type.identification.services';

export const TypeIdentificationControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new TypeIdentificationService(req).create();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new TypeIdentificationService(req).read();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new TypeIdentificationService(req).readAll();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const outcome = await new TypeIdentificationService(req).update();
        if(typeof outcome === "string"){
            res.status(400).json({error: outcome})
        }
        return res.status(200).json(outcome);
    }
}