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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phasmophobia = void 0;
const discord_js_1 = require("discord.js");
const inversify_1 = require("inversify");
let Phasmophobia = class Phasmophobia {
    constructor() {
        this.name = "phasmo";
    }
    isMatch(msg) {
        if (msg.content.startsWith(">phasmo")) {
            return true;
        }
        return false;
    }
    execute(msg, args, client) {
        if (!args[1])
            return msg.channel.send('You need to input a code!').then((mssg) => {
                msg.delete();
                return mssg.delete({ timeout: 5000 });
            });
        if (!parseInt(args[1]) || args[1].length > 6 || args[1].length < 6)
            return msg.channel.send('You need to input a valid code! (6 digit numeric)').then((mssg) => {
                msg.delete();
                return mssg.delete({ timeout: 5000 });
            });
        msg.delete();
        const phasmoEmbed = new discord_js_1.MessageEmbed()
            .setColor("#6600ff")
            .setThumbnail("https://imgur.com/gophLJZ.png")
            .setTitle("Phasmophobia Code!")
            .setAuthor(msg.author.username)
            .setDescription(`${msg.author} told me to post this Phasmophobia Code!`)
            .addField('\u200b', '\u200b')
            .addField("Code", args[1]);
        msg.channel.send('@everyone');
        return msg.channel.send(phasmoEmbed);
    }
};
Phasmophobia = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Phasmophobia);
exports.Phasmophobia = Phasmophobia;
//# sourceMappingURL=phasmophobia.js.map