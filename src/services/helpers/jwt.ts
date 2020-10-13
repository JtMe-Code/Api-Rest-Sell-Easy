import jwt from "jsonwebtoken";
import { JWT_SECRET } from './key';
import { Login } from "../../entity/login.entity";

export class JWT {
    constructor(private requestBody: Login, private tokenBearer?: string) {
    }

    create(): {token: string, expiresIn: number}{
        const TOKEN_CREATED = jwt.sign({ id: this.requestBody.id, user: this.requestBody.user }, JWT_SECRET, {
            expiresIn: 86400,
        });
        const TOKEN = {token: TOKEN_CREATED, expiresIn: 86400}
        return TOKEN;
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