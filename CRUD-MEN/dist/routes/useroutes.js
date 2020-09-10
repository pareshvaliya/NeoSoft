"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const UserController = __importStar(require("../controller/usercontroller"));
// import {validateName} from '../validator';
const validator_1 = require("../validator");
// import  { check, validationResult } from "express-validator";
const router = express_1.default.Router();
exports.router = router;
router.get('', UserController.getView);
router.get('/user/list', UserController.listUser);
router.get('/user/create', UserController.getCreateView);
router.post('/user/save', [validator_1.validateName], UserController.saveUser);
router.get('/user/edit', UserController.editUser);
router.post('/user/update', UserController.updateUser);
router.get('/user/remove', UserController.deleteUser);
