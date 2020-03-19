require('dotenv').config()
const bot = require('./bot')

require('./ready')
require('./conditions')
require('./commands')

bot.login(process.env.BOT_TOKEN)
