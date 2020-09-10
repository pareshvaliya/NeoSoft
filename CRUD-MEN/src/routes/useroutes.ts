import express ,{Router} from 'express';
import * as UserController from '../controller/usercontroller';
// import {validateName} from '../validator';
import {validateName} from '../validator';
// import  { check, validationResult } from "express-validator";



const router:Router = express.Router();

router.get('',UserController.getView);
router.get('/user/list',UserController.listUser);
router.get('/user/create',UserController.getCreateView);

router.post('/user/save',[validateName],UserController.saveUser);
router.get('/user/edit',UserController.editUser);
router.post('/user/update',UserController.updateUser);
router.get('/user/remove',UserController.deleteUser);




export {router}
