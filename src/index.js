require('dotenv').config()
const bot = require('./bot')

require('./ready')
require('./conditions')
require('./commands')
require('./abilities')

bot.login(process.env.BOT_TOKEN)
