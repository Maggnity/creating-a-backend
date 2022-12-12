import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import './src/database';
import homeRoutes from './src/routes/homeRoutes'
import alunoRoutes from './src/routes/alunoRoutes'
import userRoutes from './src/routes/userRoutes'
import tokenRoutes from './src/routes/tokenRoutes'
import fotoRoutes from './src/routes/fotoRoutes';
import { resolve } from 'path';

class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended:true }))
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));
		console.log(`middlewares`);
    }

    routes() {
        this.app.use('/', homeRoutes)
        this.app.use('/alunos/', alunoRoutes)
        this.app.use('/users/', userRoutes)
		this.app.use('/fotos/', fotoRoutes)
    }
}

export default new App().app;