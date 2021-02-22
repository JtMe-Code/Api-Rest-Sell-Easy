import App from "./app";
import "reflect-metadata";
import { createConnection } from 'typeorm';

const config:any = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "1234",
    "database": "tiendamg",
    "cache": {
        "duration": 3000
    },
    "synchronize": true, 
    "entities": [__dirname + "/entity/**/*.js"]
 }

function main() {
    const APP = new App();
    APP.listen();
    createConnection(config).then(()=>{
        console.log('Connected database')
    }).catch(error => console.log(error));
}
 main();