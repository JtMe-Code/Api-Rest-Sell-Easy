import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from "passport";
import passportStrategy from './services/helpers/passportStrategy';
import loginRoutes from './routes/login.routes';
import privateRoutes from './routes/private.routes';


export default class App {
    private app: Application;
    constructor(private port?: number | string) {
        this.app = express();
        this.setting();
        this.middlewares();
        this.routes();
    }

    setting(){
        this.app.set('port', this.port || process.env.PORT || 3000 );
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(passport.initialize());
        passport.use(passportStrategy);
    }

    routes(){
        this.app.use(loginRoutes);
        this.app.use(privateRoutes);
    }

    listen(){
        this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}

