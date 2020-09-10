import express ,{Request,Response} from 'express';
import {UserModel} from '../models/usermodel';
import * as mongoose from "mongoose";



export let getView = function(req:Request,res:Response){
    res.render('register');
}

export let getAll = function(req:Request,res:Response){
    UserModel.find((err,result)=>{
        // console.log(result);
        res.json(result);
        });
}



export let getById = async function(req:Request,res:Response){
    try{
        const user = await UserModel.findById(req.params.id);
        res.json(user);
    }
    catch(err)
    {
        res.send("not found")
    }
};

export let saveUser = async function(req:Request,res:Response){
    let newUser = new UserModel({
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        pnumber : req.body.pnumber,
    });
    let  user = await newUser.save();
    res.json(user);
    // res.send(User.find());
    // res.render('register-success',{data : req.body});
};

export let updateUser = async function(req:Request,res:Response){
    try{
        const user1 = await UserModel.findById(req.body._id);
        if(user1)
        {
            if(req.body.fname)
            {
                user1.set('fname',req.body.fname);
            }
            if(req.body.lname)
            {
                user1.set('lname',req.body.lname);
            }
            if(req.body.email)
            {
                user1.set('email',req.body.email);
            }
            if(req.body.pnumber)
            {
                user1.set('pnumber',req.body.pnumber);
            }
            await user1.save();
        }
        res.json(user1);
    }
    catch(err)
    {
        res.send("error");

    }
};

export let deleteUser = async function(req:Request,res:Response){
    try{
        let d = await UserModel.deleteOne({_id:req.params.id});
        if(d.deletedCount)
        {
        res.send("Successful deletion");
        }
        res.send("not found");
    }
    catch(err)
    {
        console.log(err);
    }
    res.send("err");
    console.log(req.params.id);
};