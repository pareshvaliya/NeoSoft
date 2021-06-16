import * as express from 'express';
import {UserController} from './user.controller';
import {UserValidation} from './user.validate'

class UserRoutes{
    public router:express.Router;
    public userController:UserController;
    public validation: UserValidation;
    constructor(){
        this.router = express.Router();
        this.userController = new UserController();
        this.validation = new UserValidation();
        this.getRoutes();
    }
    private getRoutes():void{
        this.router.get('',this.userController.getView);
        this.router.get('/list',this.userController.getUserList);
        this.router.post('/save',this.validation.registerValidation,this.userController.saveUser);
    }
}

export default new UserRoutes().router;