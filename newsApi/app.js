import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import newRouter from './src/routes';

dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.set('port', process.env.PORT);
        this.app.use(cors());
    }

    routes() {
        this.app.use('/news', newRouter);
    }
}

export default new App().app;