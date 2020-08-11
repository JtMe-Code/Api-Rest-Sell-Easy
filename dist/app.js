"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const passportStrategy_1 = __importDefault(require("./services/helpers/passportStrategy"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const private_routes_1 = __importDefault(require("./routes/private.routes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.setting();
        this.middlewares();
        this.routes();
    }
    setting() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(passport_1.default.initialize());
        passport_1.default.use(passportStrategy_1.default);
    }
    routes() {
        this.app.use(login_routes_1.default);
        this.app.use(private_routes_1.default);
    }
    listen() {
        this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}
exports.default = App;
