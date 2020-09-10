import  { check, validationResult } from "express-validator";


export let validateName = check('fname')
    .isLength({ min: 3})
    .withMessage("minimum 3 characters are required")
    .isAlpha()
    .withMessage("only alphabets are allowed");
