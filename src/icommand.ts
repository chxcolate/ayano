import { Client, Message } from "discord.js";

export interface ICommand {
  name: string,
  //aliases: [],
  //permissions: Array<string>,
  //neededPermissions: Array<string>,
  isMatch(msg: Message): boolean,
  execute(msg: Message, args: Array<any>, client: Client): Promise<Message | Message[]>,
}
