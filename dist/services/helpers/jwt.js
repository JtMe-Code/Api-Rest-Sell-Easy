"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const key_1 = require("./key");
class JWT {
    constructor(requestBody, tokenBearer) {
        this.requestBody = requestBody;
        this.tokenBearer = tokenBearer;
    }
    create() {
        const tokenCreated = jsonwebtoken_1.default.sign({ id: this.requestBody.id, user: this.requestBody.user }, key_1.jwtSecret, {
            expiresIn: 86400,
        });
        const token = { token: tokenCreated };
        return token;
    }
}
exports.JWT = JWT;
