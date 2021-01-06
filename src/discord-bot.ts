import {Client, Message} from 'discord.js'
import {inject, injectable} from 'inversify'
import {TYPES} from './types';
import {MessageResponder} from './services/message-responder'

@injectable()
export class Ayona {
  private client: Client;
  private readonly token: string;
  private messageResponder: MessageResponder

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.MessageResponder) messageResponder: MessageResponder
  ) {
    this.client = client;
    this.token = token;
    this.messageResponder = messageResponder;
  }

  public listen(): Promise< string > {
    let client = new Client()
    this.client.on('message', (msg: Message) => {
      if(msg.author.bot) return;

      console.log("Message received! Contents: ", msg.content);

      this.messageResponder.handle(msg).then(() => {
        console.log('response sent!')
      }).catch((error) => {
        console.log('response not sent')
      })
    })
    return this.client.login(this.token)
  }
}
