import {Client, Message} from "discord.js";
import {injectable, multiInject} from "inversify";
import {ICommand} from '../icommand'
import {TYPES} from '../types'

@injectable()
export class CommandHandler {
  private commands: ICommand[]

  constructor(
    @multiInject(TYPES.ICommand) commands: ICommand[]
  ) {
    this.commands = commands;
  }

  handle(message: Message, client: Client): Promise<Message | Message[]> {
    this.commands.forEach(command => {
      if(command.isMatch(message)) {
        const args = message.content.slice(1).split(/ +/)
        return command.execute(message, args, client)
      }
    });

    return Promise.reject();
  }
}
