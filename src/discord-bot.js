"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ayona = void 0;
const discord_js_1 = require("discord.js");
const inversify_1 = require("inversify");
const types_1 = require("./types");
const message_responder_1 = require("./services/message-responder");
let Ayona = class Ayona {
    constructor(client, token, messageResponder) {
        this.client = client;
        this.token = token;
        this.messageResponder = messageResponder;
    }
    listen() {
        let client = new discord_js_1.Client();
        this.client.on('message', (msg) => {
            if (msg.author.bot)
                return;
            console.log("Message received! Contents: ", msg.content);
            this.messageResponder.handle(msg).then(() => {
                console.log('response sent!');
            }).catch((error) => {
                console.log('response not sent');
            });
        });
        return this.client.login(this.token);
    }
};
Ayona = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.Client)),
    __param(1, inversify_1.inject(types_1.TYPES.Token)),
    __param(2, inversify_1.inject(types_1.TYPES.MessageResponder)),
    __metadata("design:paramtypes", [discord_js_1.Client, String, message_responder_1.MessageResponder])
], Ayona);
exports.Ayona = Ayona;
//# sourceMappingURL=discord-bot.js.map