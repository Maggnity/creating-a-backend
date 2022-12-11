import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import './src/database';
import homeRoutes from './src/routes/homeRoutes'

class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended:true }))
        this.app.use(express.json());
		console.log(`middlewares`);
    }

    routes() {
        this.app.use('/', homeRoutes)
		console.log('oi');
    }
}

export default new App().app;