import * as Joi from "@hapi/joi";
import {Request, Response, NextFunction} from "express";
import bodySchemaRegister from './validate.schemas';

export class UserValidation {

    public async registerValidation(req: Request, res: Response, next:NextFunction){
        const {error} = bodySchemaRegister.validate(req.body,{ abortEarly: false });
        if(error){
            const { details } = error; 
            const message = details.map(i => i.message).join(',AND, ');
            // console.log("error", message);
            return res.status(400).json({error:message});
        }
        next();
        }
    }
