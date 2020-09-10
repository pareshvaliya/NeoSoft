"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
// const registerRouter = require('./routes/register-routes');
const register_routes_1 = require("./routes/register-routes");
const useroutes_1 = require("./routes/useroutes");
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
// var expressLayouts = require('express-ejs-layouts');
const app = express_1.default();
const port = 8000;
// app.use('/styles',express.static(path.join( __dirname, "public" )));
app.use(express_ejs_layouts_1.default);
// app.use(express.static(path.join( __dirname, "public")));
app.set("views", path_1.default.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const con = mongoose_1.default.connect('mongodb://localhost/userdemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
con.then(() => {
    console.log("connected..");
}).catch((err) => {
    console.log(err);
});
app.use('/register', register_routes_1.router);
app.use('/', useroutes_1.router);
app.listen(port, () => {
    console.log(`Server Listening on port : ${port}`);
});
