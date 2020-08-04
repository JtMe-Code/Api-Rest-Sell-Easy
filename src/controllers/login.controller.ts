import {Request, Response} from 'express';
import {LoginServices} from '../services/login.services';

export const LoginControllers = {
    signup: async (req: Request, res: Response): Promise<Response> => {
            let outcome = await new LoginServices(req.body).signup();
            if(typeof outcome === "string"){
                res.status(400).json({err: outcome})
            }
            return res.status(200).json(outcome);
    },
    signin: async (req: Request, res: Response): Promise<Response> => {
                let outcome = await new LoginServices(req.body).signin();
                if(typeof outcome === "string"){
                    res.status(400).json({err: outcome})
                }
                return res.status(200).json(outcome);
    }
}