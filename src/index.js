require('dotenv').config()
const bot = require('./bot')

require('./ready')
require('./conditions')
require('./commands')
require('./abilities')

bot.login('NjkwMjE5Njc4NTU5NTAyMzUy.XoYSOw.gwtVQGyMYZaQ_Kjy5zS-KxTvZeA')
