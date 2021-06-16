"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const portNumber = Number(process.env.SERVER_PORT);
const PORT = portNumber || 3000;
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port check ' + PORT);
});
//# sourceMappingURL=server.js.map