require('dotenv').config();
import container from './inversify.config'
import {TYPES} from './types'
import {Ayona} from './discord-bot'
let bot = container.get<Ayona>(TYPES.Ayona);
bot.listen().then(() => {
  console.log("logged in!")
}).catch((error) => {
  console.log(`oh no! ${error}`)
})
