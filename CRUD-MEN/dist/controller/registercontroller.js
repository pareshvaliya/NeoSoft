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
exports.deleteUser = exports.updateUser = exports.saveUser = exports.getById = exports.getAll = exports.getView = void 0;
const usermodel_1 = require("../models/usermodel");
exports.getView = function (req, res) {
    res.render('register');
};
exports.getAll = function (req, res) {
    usermodel_1.UserModel.find((err, result) => {
        // console.log(result);
        res.json(result);
    });
};
exports.getById = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield usermodel_1.UserModel.findById(req.params.id);
            res.json(user);
        }
        catch (err) {
            res.send("not found");
        }
    });
};
exports.saveUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let newUser = new usermodel_1.UserModel({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            pnumber: req.body.pnumber,
        });
        let user = yield newUser.save();
        res.json(user);
        // res.send(User.find());
        // res.render('register-success',{data : req.body});
    });
};
exports.updateUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user1 = yield usermodel_1.UserModel.findById(req.body._id);
            if (user1) {
                if (req.body.fname) {
                    user1.set('fname', req.body.fname);
                }
                if (req.body.lname) {
                    user1.set('lname', req.body.lname);
                }
                if (req.body.email) {
                    user1.set('email', req.body.email);
                }
                if (req.body.pnumber) {
                    user1.set('pnumber', req.body.pnumber);
                }
                yield user1.save();
            }
            res.json(user1);
        }
        catch (err) {
            res.send("error");
        }
    });
};
exports.deleteUser = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let d = yield usermodel_1.UserModel.deleteOne({ _id: req.params.id });
            if (d.deletedCount) {
                res.send("Successful deletion");
            }
            res.send("not found");
        }
        catch (err) {
            console.log(err);
        }
        res.send("err");
        console.log(req.params.id);
    });
};
