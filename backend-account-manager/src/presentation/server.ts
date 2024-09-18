import express from "express";
import { swaggerUi, swaggerSpec } from "../swagger/swagger";

interface Options{
    port: number,
}
export class Server {

    private app = express();
    private readonly port: number;
    
    constructor(options: Options) {
        this.app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this.port = options.port
    }
    
    async start(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`); 
        })
    }
}