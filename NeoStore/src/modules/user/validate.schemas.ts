import * as Joi from "@hapi/joi";
const bodySchemaRegister = Joi.object({
    user_firstname:Joi.string()
    .required()
    .messages({
        'any.required':"first name is required",
        'string.base':"first name must be a string only",
        'string.empty':'Please enter your first name'
    }),
    user_lastname:Joi.string()
    .required()
    .messages({
        'any.required':"last name is required",
        'string.base':"last name must be a string only",
        'string.empty':'Please enter your last name'
    }),
    user_email: Joi.string().email().max(250).required()
    .messages({
        'any.required':"email is required",
        'string.empty':'Please enter your email',
        'string.email':'please enter a valid email'        
    }),
    user_password:Joi.string()
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .messages({
        'any.required':"email is required",
        'string.pattern.base':'Password must have digits and letters only',
        'string.empty':'Please enter your email',
    }),
    user_phonenumber:Joi.number()
    .required()
    .min(10)
    .messages({
        'any.required':"email is required",
        'number.base':'phone number must be a number',
        'number.min':'phone number must contains only 10 numbers',
        // 'number.max':'phone number must contains only 10 numbers',

    })
});

export default bodySchemaRegister;