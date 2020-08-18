import App from "./app";
import "reflect-metadata";
import { createConnection } from 'typeorm';

function main() {
    const APP = new App();
    APP.listen();
    createConnection().then(()=>{
        console.log('Connected database')
    });
}
 main();