"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.editUser = exports.listUser = exports.saveUser = exports.getCreateView = exports.getView = void 0;
const usermodel_1 = require("../models/usermodel");
const express_validator_1 = require("express-validator");
exports.getView = (req, res) => {
    res.render('home');
};
exports.getCreateView = (req, res) => {
    res.render('create');
};
exports.saveUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(req.body);
        const errors = express_validator_1.validationResult(req);
        // console.log(errors.isEmpty());
        if (!errors.isEmpty()) {
            // console.log(errors.array());
            // res.redirect('create');
            return res.render('create', { error: errors.array() });
            // res.render('create', { flash: { type: 'alert-danger', messages: errors }});
            // return res.status(422).json({ errors: errors.array() })
        }
        let newUser = new usermodel_1.UserModel({ fname: req.body.fname });
        let user = yield newUser.save();
        exports.listUser(req, res);
    });
};
exports.listUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        usermodel_1.UserModel.find((err, result) => {
            // console.log(result);
            // res.json(result);
            res.render('listuser', { data: result });
        });
    });
};
exports.editUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user1 = yield usermodel_1.UserModel.findById(req.query.id);
        res.render('edit', { data: user1 });
    });
};
exports.updateUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user1 = yield usermodel_1.UserModel.findById(req.query.id);
        if (user1) {
            if (req.body.fname) {
                user1.set('fname', req.body.fname);
            }
            yield user1.save();
        }
        exports.listUser(req, res);
    });
};
exports.deleteUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let d = yield usermodel_1.UserModel.deleteOne({ _id: req.query.id });
        exports.listUser(req, res);
    });
};
