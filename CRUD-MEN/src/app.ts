import express, {Application,Request,Response, Router} from 'express';
import bodyParser from 'body-parser';
import path from "path";
import mongoose from "mongoose";
// const registerRouter = require('./routes/register-routes');
import {router as registerRouter}  from "./routes/register-routes";
import {router as userRouter}  from "./routes/useroutes";
import expressLayouts from 'express-ejs-layouts';
// var expressLayouts = require('express-ejs-layouts');



const app:Application = express();
const port:number = 8000;

// app.use('/styles',express.static(path.join( __dirname, "public" )));
app.use(expressLayouts);
// app.use(express.static(path.join( __dirname, "public")));

app.set( "views", path.join( __dirname, "views" ) );
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const con = mongoose.connect('mongodb://localhost/userdemo',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true});
    
con.then(()=>{
        console.log("connected..");
    }).catch((err)=>{
        console.log(err);
    });

app.use('/register',registerRouter);
app.use('/',userRouter);

app.listen(port,()=>{
    console.log(`Server Listening on port : ${port}`);
});
