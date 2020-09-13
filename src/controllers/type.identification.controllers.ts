import {Request, Response} from 'express';
import { TypeIdentificationService } from '../services/type.identification.services';

export const TypeIdentificationControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new TypeIdentificationService(req).create();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new TypeIdentificationService(req).read();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new TypeIdentificationService(req).readAll();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new TypeIdentificationService(req).update();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    }
}