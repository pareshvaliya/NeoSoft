"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateName = void 0;
const express_validator_1 = require("express-validator");
exports.validateName = express_validator_1.check('fname')
    .isLength({ min: 3 })
    .withMessage("minimum 3 characters are required")
    .isAlpha()
    .withMessage("only alphabets are allowed");
