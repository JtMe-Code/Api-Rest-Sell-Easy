import {ILogin} from '../../interfaces/login';
import jwt from "jsonwebtoken";
import {jwtSecret} from './key';

export class JWT {
    constructor(private requestBody: ILogin, private tokenBearer?: string) {
    }

    create(): {token: string}{
        const tokenCreated = jwt.sign({ id: this.requestBody.id, user: this.requestBody.user }, jwtSecret, {
            expiresIn: 86400,
        });
        const token = {token: tokenCreated}
        return token;
    }
    // SOLO USAR PARA CONSULTAS EN CASO DE SER NECESARIO
    // decode(){
    //     let token = this.tokenBearer.replace("Bearer ", "");
    //     let payloadDecoded = jwt.verify(token, jwtSecret, (err: any, decode: any) => {
    //         if (err) {
    //         return `Token invalido: ${err}`;
    //         }
    //         return decode;
    //     });
    //     return payloadDecoded;
    // }
}