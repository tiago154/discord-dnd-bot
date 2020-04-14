const bot = require('../bot')
const buildMessage = require('../helpers/build-message')

const COMMANDS = [
    '!conditions',
    '!condition <nome da condição>',
    '!abilities',
    '!ability <nome da condição>'
]

const commands = msg => {
    if (msg.content === '!commands') {
        msg.reply('Segue comandos disponíveis:')
        const embed = buildMessage('BLUE', 'Commands:', COMMANDS.map(c => `${c}`))
        msg.channel.send(embed)
    }
}

bot.on('message', commands)