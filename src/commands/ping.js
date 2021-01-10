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
exports.Ping = void 0;
const discord_js_1 = require("discord.js");
const inversify_1 = require("inversify");
let Ping = class Ping {
    constructor() {
        this.name = "ping";
    }
    buildEmbed(author, ping) {
        const exampleEmbed = new discord_js_1.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('The Pinganator')
            .setAuthor(author, 'https://i.imgur.com/Gi9cwgR.png', 'https://discord.js.org')
            .setDescription('This is your ping')
            .setThumbnail('https://i.imgur.com/Gi9cwgR.png')
            .addFields({ name: 'Ping', value: ping })
            .setFooter('Bill is weird', 'https://i.imgur.com/Gi9cwgR.png');
        return exampleEmbed;
    }
    isMatch(msg) {
        if (msg.content == ">ping") {
            return true;
        }
        return false;
    }
    execute(msg, args, client) {
        return msg.channel.send('Calculating...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - msg.createdTimestamp;
            resultMessage.edit(this.buildEmbed(msg.author.username, ping));
            msg.delete();
            return resultMessage.delete({ timeout: 10000 });
        });
    }
};
Ping = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Ping);
exports.Ping = Ping;
//# sourceMappingURL=ping.js.map