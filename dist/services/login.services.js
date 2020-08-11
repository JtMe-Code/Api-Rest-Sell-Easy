"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginServices = void 0;
const login_entity_1 = require("../entity/login.entity");
const encrypt_1 = require("./helpers/encrypt");
const jwt_1 = require("./helpers/jwt");
class LoginServices {
    constructor(req) {
        this.login = login_entity_1.Login;
        this.requestBody = req.body;
    }
    signup() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.login.findOne({ user: this.requestBody.user });
            if (result) {
                return "El usuario ya existe";
            }
            const encryptedPassword = yield new encrypt_1.Encrypt(this.requestBody.password).encryptedPassword();
            this.requestBody.password = encryptedPassword;
            const data = this.login.create(this.requestBody);
            const saveData = yield this.login.save(data);
            return saveData;
        });
    }
    signin() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.login.findOne({ user: this.requestBody.user });
            if (!result) {
                return "Usuario o contraseña incorrecta";
            }
            const comparePassword = yield new encrypt_1.Encrypt(this.requestBody.password, result.password).comparePassword();
            if (!comparePassword) {
                return "Usuario o contraseña incorrecta";
            }
            const token = new jwt_1.JWT(result).create();
            return token;
        });
    }
}
exports.LoginServices = LoginServices;
