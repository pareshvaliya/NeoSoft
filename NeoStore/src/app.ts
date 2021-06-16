import * as express from 'express';
import * as bodyParser from 'body-parser';
import userRouter from './modules/user/user.routes';
import loggerMiddleware from './middleware/logger';
import sequelize from './sequalise';

class App{
    public app:express.Application;
    constructor()
    {
        this.app = express();
        this.middleware();
        this.setupRoutes();
        this.connectTOSql();
    }

    private middleware():void{
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(loggerMiddleware);
    }

    private setupRoutes():void{
        this.app.use('/user',userRouter);
    }

    private connectTOSql():void{
        try {
            sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
}

export default new App().app;