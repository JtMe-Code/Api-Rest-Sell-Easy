import {getRepository} from 'typeorm';
import {Login} from '../entity/login.entity';
import {ILogin} from '../interfaces/login';
import {Encrypt} from './helpers/encrypt';
import {JWT} from './helpers/jwt';

export class LoginServices {    
    constructor(private requestBody: ILogin){
    }

    async signup(): Promise<string | ILogin>{
        const result = await getRepository(Login).findOne({user: this.requestBody.user});
        if(result){
            return "El usuario ya existe";
        }
        const encryptedPassword = await new Encrypt(this.requestBody.password).encryptedPassword();
        this.requestBody.password = encryptedPassword;

        const saveResult = await getRepository(Login).save(this.requestBody);
        return saveResult;
    }

    async signin(): Promise<string | {token: string}>{
        const result = await getRepository(Login).findOne({user: this.requestBody.user});
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