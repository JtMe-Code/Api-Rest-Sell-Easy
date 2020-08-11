"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
function main() {
    const app = new app_1.default();
    app.listen();
    typeorm_1.createConnection();
}
main();
