import {Request, Response} from 'express';
import { TypeExpenseService } from '../services/type.expense.services';

export const TypeExpenseControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new TypeExpenseService(req).create();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new TypeExpenseService(req).read();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new TypeExpenseService(req).readAll();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new TypeExpenseService(req).update();
        if(typeof OUTCOME === "string"){
            return res.status(400).send(OUTCOME);
        }
        return res.status(200).json(OUTCOME);
    }
}