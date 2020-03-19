const bot = require('../bot')

const online = () => console.log(`Bot Online: ${bot.user.tag}`)

bot.once('ready', online)