import {Client, Message} from 'discord.js'
import {inject, injectable} from 'inversify'
import {TYPES} from './types';
import {CommandHandler} from './services/message-responder'

@injectable()
export class Ayona {
  private client: Client;
  private readonly token: string;
  private commandHandler: CommandHandler

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.MessageResponder) commandHandler: CommandHandler
  ) {
    this.client = client;
    this.token = token;
    this.commandHandler = commandHandler;
  }

  public listen(): Promise< string > {
    let client = new Client()
    let args: string[] = []
    this.client.on('message', (msg: Message) => {
      if(msg.author.bot) return;
      this.commandHandler.handle(msg, client)
    })
    return this.client.login(this.token)
  }
}
