import {Request, Response} from 'express';
import {LoginServices} from '../services/login.services';

export const LoginControllers = {
    signup: async (req: Request, res: Response): Promise<Response> => {
            const OUTCOME = await new LoginServices(req).signup();
            if(typeof OUTCOME === "string"){
                res.status(400).json({error: OUTCOME})
            }
            return res.status(200).json(OUTCOME);
    },
    signin: async (req: Request, res: Response): Promise<Response> => {
                const OUTCOME = await new LoginServices(req).signin();
                if(typeof OUTCOME === "string"){
                    res.status(400).json({error: OUTCOME})
                }
                return res.status(200).json(OUTCOME);
    }
}