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
    if(!parseInt(msg.content) || msg.content.length > 6 || msg.content.length < 6) {
      return false;
    }
    return true;
  }
  execute(msg: Message, args: any[], client: Client): Promise<Message | Message[]> {
    msg.delete()
    const phasmoEmbed = new MessageEmbed()
    .setColor("#6600ff")
    .setThumbnail("https://imgur.com/gophLJZ.png")
    .setTitle("Phasmophobia Code!")
    .setAuthor(msg.author.username)
    .setDescription(`${msg.author} told me to post this Phasmophobia Code!`)
    .addField("Code", msg.content)
    let phasmoEmbedSended = msg.channel.send('@everyone').then(result => {
      result.edit(phasmoEmbed)
    })

  }
}
