"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserController_1 = require("../controller/UserController");
class UserRoutes {
    constructor() {
        this.router = express.Router();
        this.userController = new UserController_1.UserController();
        this.getRoutes();
    }
    getRoutes() {
        this.router.get('', this.userController.getView);
        this.router.get('/list', this.userController.getUserList);
    }
}
exports.default = new UserRoutes().router;
//# sourceMappingURL=UserRoutes.js.map