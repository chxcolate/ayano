import { Message, Client, MessageEmbed } from "discord.js";
import { injectable } from "inversify";
import { ICommand } from "../icommand";

@injectable()
export class Biden implements ICommand {
  name: string
  constructor() {
    this.name = "biden"
  }
  isMatch(msg: Message): boolean {
    if(msg.content == ">biden") return true;
    return false;
  }
  execute(msg: Message, args: any[], client: Client): Promise<Message | Message[]> {
    let time: any = this.calculateTimeLeftUntilDate("1/20/2021")
    let timeToBiden = new MessageEmbed()
    .setColor("#f71b52")
    .setTitle("Biden 2021")
    .setURL("https://chxco.dev/jan20")
    .setAuthor(`Initated by ${msg.author.username}`)
    .setDescription("Time Until Trump is Out of Office!")
    .setThumbnail("https://i.imgur.com/zrspHCw.png")
    .addField("Time Left", `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds.`)
    msg.delete()
    return msg.channel.send(timeToBiden);
  }
  calculateTimeLeftUntilDate(date) {
  let difference = +new Date(date) - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}
}
