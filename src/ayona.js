"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const inversify_config_1 = require("./inversify.config");
const types_1 = require("./types");
let bot = inversify_config_1.default.get(types_1.TYPES.Ayona);
bot.listen().then(() => {
    console.log("logged in!");
}).catch((error) => {
    console.log(`oh no! ${error}`);
});
//# sourceMappingURL=ayona.js.map