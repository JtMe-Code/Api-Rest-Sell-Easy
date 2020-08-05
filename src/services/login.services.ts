import {getRepository} from 'typeorm';
import {Login} from '../entity/login.entity';
import {ILogin} from '../interfaces/login';
import {Encrypt} from './helpers/encrypt';
import {JWT} from './helpers/jwt';

export class LoginServices {
    private login = getRepository(Login);
    constructor(private requestBody: ILogin){
    }

    async signup(): Promise<string | ILogin>{
        const result = await this.login.findOne({user: this.requestBody.user});
        if(result){
            return "El usuario ya existe";
        }
        const encryptedPassword = await new Encrypt(this.requestBody.password).encryptedPassword();
        this.requestBody.password = encryptedPassword;

        const saveData = await this.login.save(this.requestBody);
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