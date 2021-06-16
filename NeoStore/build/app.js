"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const UserRoutes_1 = require("./routes/UserRoutes");
const logger_1 = require("./middleware/logger");
class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.setupRoutes();
    }
    middleware() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(logger_1.default);
    }
    setupRoutes() {
        this.app.use('/user', UserRoutes_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map