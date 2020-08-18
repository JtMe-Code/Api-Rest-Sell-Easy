import { getRepository } from 'typeorm';
import { Request } from 'express';
import {Login} from '../entity/login.entity';
import {Encrypt} from './helpers/encrypt';
import {JWT} from './helpers/jwt';

export class LoginServices {
    private requestBody: Login;
    constructor(req: Request){
        this.requestBody = req.body;
    }

    async signup(): Promise<string | object>{
        const RESULT = await getRepository(Login).findOne({user: this.requestBody.user});
        if(RESULT){
            return "El usuario ya existe";
        }
        const encryptedPassword = await new Encrypt(this.requestBody.password).encryptedPassword();
        this.requestBody.password = encryptedPassword;

        const DATA = getRepository(Login).create(this.requestBody);
        const SAVE_DATA = await getRepository(Login).save(DATA);
        return SAVE_DATA;
    }

    async signin(): Promise<string | {token: string}>{
        const RESULT = await getRepository(Login).findOne({user: this.requestBody.user});
        if(!RESULT){
            return "Usuario o contraseña incorrecta";
        }
        const COMPARE_PASSWORD = await new Encrypt(this.requestBody.password, RESULT.password).comparePassword();
        if(!COMPARE_PASSWORD){
            return "Usuario o contraseña incorrecta";
        }        
        const TOKEN = new JWT(RESULT).create();
        return TOKEN;
    }

}