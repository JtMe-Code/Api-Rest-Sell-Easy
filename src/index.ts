import App from "./app";
import "reflect-metadata";
import { createConnection } from 'typeorm';

function main() {
    const app = new App();
    app.listen();
    createConnection().then(()=>{
        console.log('connect database')
    });
}
 main();