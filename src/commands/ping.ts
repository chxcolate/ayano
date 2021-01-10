import { Client, Message, MessageEmbed } from "discord.js";
import { injectable } from "inversify";
import { ICommand } from "../icommand";

@injectable()
export class Ping implements ICommand {
   name: string;

  constructor() {
    this.name = "ping"
  }

    buildEmbed(author: string, ping: number): MessageEmbed {
    const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('The Pinganator')
      .setAuthor(author, 'https://i.imgur.com/Gi9cwgR.png', 'https://discord.js.org')
      .setDescription('This is your ping')
      .setThumbnail('https://i.imgur.com/Gi9cwgR.png')
      .addFields(
        { name: 'Ping', value: ping },
      )
      .setFooter('Bill is weird', 'https://i.imgur.com/Gi9cwgR.png');
    return exampleEmbed;
  }

  isMatch(msg: Message): boolean {
    if (msg.content == ">ping") {
      return true
    }
    return false
  }

  execute(msg: Message, args: Array<any>, client: Client): Promise<Message | Message[]> {
    return msg.channel.send('Calculating...').then(resultMessage => {
      const ping = resultMessage.createdTimestamp - msg.createdTimestamp
      resultMessage.edit(this.buildEmbed(msg.author.username, ping))
      msg.delete()
      return resultMessage.delete({ timeout: 10000 })
    })
  }
}
