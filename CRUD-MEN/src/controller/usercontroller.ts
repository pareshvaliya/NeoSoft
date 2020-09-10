import express ,{Request,Response} from 'express';
import {UserModel} from '../models/usermodel';
import  { check, validationResult } from "express-validator";


export const getView = (req:Request,res:Response)=>{
    res.render('home');
};

export let getCreateView = (req:Request,res:Response)=>{
    res.render('create');
};

export let saveUser = async function(req:Request,res:Response){
    // console.log(req.body);
    const errors = validationResult(req);
    // console.log(errors.isEmpty());
    if (!errors.isEmpty()) {
        // console.log(errors.array());
        // res.redirect('create');
        return res.render('create',{error:errors.array()});
        // res.render('create', { flash: { type: 'alert-danger', messages: errors }});
        // return res.status(422).json({ errors: errors.array() })
    }
    let newUser = new UserModel({fname:req.body.fname});
    let  user = await newUser.save();
    listUser(req,res);
};

export let listUser = async function(req:Request,res:Response){
    UserModel.find((err,result)=>{
        // console.log(result);
        // res.json(result);
        res.render('listuser',{data : result});
        });
};

export let editUser = async function(req:Request,res:Response){
        const user1 = await UserModel.findById(req.query.id);
        res.render('edit',{data:user1});
};

export let updateUser = async function(req:Request,res:Response){
    const user1 = await UserModel.findById(req.query.id);
    if(user1)
    {
        if(req.body.fname)
            {
                user1.set('fname',req.body.fname);
            }
            await user1.save();
    }
    listUser(req,res);
};

export let deleteUser = async function(req:Request,res:Response){
    let d = await UserModel.deleteOne({_id:req.query.id});
    listUser(req,res);
};