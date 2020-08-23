import {Request, Response} from 'express';
import { ExpenseService } from '../services/expense.services';

export const ExpenseControllers = {
    create: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ExpenseService(req).create();
        if(typeof OUTCOME === "string"){
            res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    read: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ExpenseService(req).read();
        if(typeof OUTCOME === "string"){
            res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    readAll:async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ExpenseService(req).readAll();
        if(typeof OUTCOME === "string"){
            res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    update: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ExpenseService(req).update();
        if(typeof OUTCOME === "string"){
            res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    },
    search: async (req: Request, res: Response): Promise<Response> => {
        const OUTCOME = await new ExpenseService(req).search();
        if(typeof OUTCOME === "string"){
            res.status(400).json({error: OUTCOME})
        }
        return res.status(200).json(OUTCOME);
    }
}