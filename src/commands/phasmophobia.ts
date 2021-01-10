import { Message, Client, MessageEmbed } from "discord.js";
import { injectable } from "inversify";
import { ICommand } from "../icommand";

@injectable()
export class Phasmophobia implements ICommand {
  name: string;
  constructor() {
    this.name = "phasmo"
  }
  isMatch(msg: Message): boolean {
    if(msg.content.startsWith(">phasmo")) {
      return true;
    }
    return false;
  }
  execute(msg: Message, args: any[], client: Client): Promise<Message | Message[]> {
    if(!args[1]) return msg.channel.send('You need to input a code!').then((mssg) => {
      msg.delete()
      return mssg.delete({timeout: 5000})
    })
    if(!parseInt(args[1]) || args[1].length > 6 || args[1].length < 6) return msg.channel.send('You need to input a valid code! (6 digit numeric)').then((mssg) => {
      msg.delete()
      return mssg.delete({timeout: 5000})
    })
    msg.delete()
    const phasmoEmbed = new MessageEmbed()
    .setColor("#6600ff")
    .setThumbnail("https://imgur.com/gophLJZ.png")
    .setTitle("Phasmophobia Code!")
    .setAuthor(msg.author.username)
    .setDescription(`${msg.author} told me to post this Phasmophobia Code!`)
    .addField("Code", args[1])
    msg.channel.send('@everyone')
    return msg.channel.send(phasmoEmbed);
  }
}
