import { Request, Response } from 'express';
import User from './user.model';
import * as bycrypt from 'bcryptjs';

export class UserController {

    public getView(req: Request, res: Response){
        res.send('Hello world');
    }
    public getUserList(req: Request, res: Response){
        res.send('Hello this is user list');
    }

    public async saveUser(req: Request, res: Response){
        // await User.sync({ force: true });
        // console.log("The table for the User model was just (re)created!");
        if(req.body.user_password)
        {
                       
        }
        const newUser = await User.create({
            user_firstname: req.body.user_firstname,
            user_lastname: req.body.user_lastname,
            user_email: req.body.user_email,
            user_password:req.body.user_password,
            user_phonenumber:req.body.user_phonenumber
          });
          bycrypt.genSalt(10,function(err,salt){
            if(err) throw err;
            bycrypt.hash(newUser.user_password,salt,(err,hash)=>{
                // console.log(hash);
                newUser.user_password = hash;
                newUser.save().then(user=>res.json(user));
            })
        }) 
        //   console.log(newUser.user_id, newUser.user_firstname, newUser.user_lastname,newUser.user_password);
    }
}


