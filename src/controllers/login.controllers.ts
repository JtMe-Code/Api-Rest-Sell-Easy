import {Request, Response} from 'express';
import {LoginServices} from '../services/login.services';

export const LoginControllers = {
    signup: async (req: Request, res: Response): Promise<Response> => {
            let outcome = await new LoginServices(req).signup();
            if(typeof outcome === "string"){
                res.status(400).json({error: outcome})
            }
            return res.status(200).json(outcome);
    },
    signin: async (req: Request, res: Response): Promise<Response> => {
                let outcome = await new LoginServices(req).signin();
                if(typeof outcome === "string"){
                    res.status(400).json({error: outcome})
                }
                return res.status(200).json(outcome);
    }
}