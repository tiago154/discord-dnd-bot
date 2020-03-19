const bot = require('../bot')
const COMMANDS = [
    '!conditions',
    '!condition <nome da condição>'
]

const commands = msg => {
    if (msg.content === '!commands') {
        msg.reply('Segue comandos disponíveis:')
        msg.channel.send(COMMANDS.map(c => `:grey_exclamation: ${c}`))
    }
}

bot.on('message', commands)