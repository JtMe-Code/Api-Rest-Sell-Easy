import { Request } from 'express';
import {Login} from '../entity/login.entity';
import {ILogin} from '../interfaces/login';
import {Encrypt} from './helpers/encrypt';
import {JWT} from './helpers/jwt';

export class LoginServices {
    private requestBody: ILogin;
    private login = Login;
    constructor(req: Request){
        this.requestBody = req.body;
    }

    async signup(): Promise<string | ILogin>{
        const result = await this.login.findOne({user: this.requestBody.user});
        if(result){
            return "El usuario ya existe";
        }
        const encryptedPassword = await new Encrypt(this.requestBody.password).encryptedPassword();
        this.requestBody.password = encryptedPassword;

        const data = this.login.create(this.requestBody);
        const saveData = await this.login.save(data);
        return saveData;
    }

    async signin(): Promise<string | {token: string}>{
        const result = await this.login.findOne({user: this.requestBody.user});
        if(!result){
            return "Usuario o contraseña incorrecta";
        }
        const comparePassword = await new Encrypt(this.requestBody.password, result.password).comparePassword();
        if(!comparePassword){
            return "Usuario o contraseña incorrecta";
        }        
        const token = new JWT(result).create();
        return token;
    }

}