const bot = require('../bot')
const { MessageEmbed } = require('discord.js')

const COMMANDS = [
    '!conditions',
    '!condition <nome da condição>'
]

const buildMessage = message => new MessageEmbed()
    .setColor('BLUE')
    .setTitle('Commands:')
    .setDescription(message)

const commands = msg => {
    if (msg.content === '!commands') {
        msg.reply('Segue comandos disponíveis:')
        const embed = buildMessage(COMMANDS.map(c => `${c}`))
        msg.channel.send(embed)
    }
}

bot.on('message', commands)