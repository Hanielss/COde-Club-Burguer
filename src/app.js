import express from 'express'
import routes from './routes'

class App {

    constructor() {

        this.app = express();

        this.middlewares();
        this.routes();


    }
3ecs
    middlewares() {

        this.app.use(express.json())

    }


    routes() {

        this.app.use(routes)
    }

}

export default new App().app