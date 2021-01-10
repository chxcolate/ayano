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
exports.Biden = void 0;
const discord_js_1 = require("discord.js");
const inversify_1 = require("inversify");
let Biden = class Biden {
    constructor() {
        this.name = "biden";
    }
    isMatch(msg) {
        if (msg.content == ">biden")
            return true;
        return false;
    }
    execute(msg, args, client) {
        let time = this.calculateTimeLeftUntilDate("1/20/2021");
        let timeToBiden = new discord_js_1.MessageEmbed()
            .setColor("#f71b52")
            .setTitle("Biden 2021")
            .setURL("https://chxco.dev/jan20")
            .setAuthor(`Initated by ${msg.author.username}`)
            .setDescription("Time Until Trump is Out of Office!")
            .setThumbnail("https://i.imgur.com/zrspHCw.png")
            .addField("Time Left", `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds.`);
        msg.delete();
        return msg.channel.send(timeToBiden);
    }
    calculateTimeLeftUntilDate(date) {
        let difference = +new Date(date) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }
};
Biden = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Biden);
exports.Biden = Biden;
//# sourceMappingURL=biden.js.map