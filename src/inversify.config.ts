import 'reflect-metadata'
import {Container} from 'inversify'
import {TYPES} from './types'
import {Ayona} from './discord-bot'
import {Client} from 'discord.js'
import {CommandHandler} from './services/message-responder'
import { ICommand } from './icommand'
import * as commands from './commands'

let container = new Container()

container.bind<Ayona>(TYPES.Ayona).to(Ayona).inSingletonScope()
container.bind<Client>(TYPES.Client).toConstantValue(new Client())
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<CommandHandler>(TYPES.MessageResponder).to(CommandHandler).inSingletonScope();
Object.keys(commands).forEach(element => {
  container.bind<ICommand>(TYPES.ICommand).to(commands[element]);
});

export default container
