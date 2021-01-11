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
        if (!parseInt(msg.content) || msg.content.length > 6 || msg.content.length < 6) {
            return false;
        }
        return true;
    }
    execute(msg, args, client) {
        msg.delete();
        const phasmoEmbed = new discord_js_1.MessageEmbed()
            .setColor("#6600ff")
            .setThumbnail("https://imgur.com/gophLJZ.png")
            .setTitle("Phasmophobia Code!")
            .setAuthor(msg.author.username)
            .setDescription(`${msg.author} told me to post this Phasmophobia Code!`)
            .addField("Code", msg.content);
        let phasmoEmbedSended = msg.channel.send('@everyone').then(result => {
            result.edit(phasmoEmbed);
        });
    }
};
Phasmophobia = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Phasmophobia);
exports.Phasmophobia = Phasmophobia;
//# sourceMappingURL=phasmophobia.js.map