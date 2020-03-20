const bot = require('../bot')
const service = require('../services')
const { factoryConditions } = require('./conditions')
const { MessageEmbed } = require('discord.js')


const buildMessage = (message, title) => new MessageEmbed()
    .setColor('RED')
    .setTitle(title)
    .setDescription(message)

const allConditions = async msg => {
    if (msg.content === '!conditions') {
        const result = await service.get()
        const conditions = factoryConditions(result).map(c => `:game_die: ${c}`)
        msg.reply('Segue todos as condições:')
        const embed = buildMessage(conditions, 'Conditions')
        msg.channel.send(embed)
    }
}

const specificCondition = async msg => {
    if (/^!condition\s.*/.test(msg.content)) {
        const conditionRaw = msg.content.split(' ')[1].toLowerCase()
        const { body } = await service.get(`/${conditionRaw}`)
        if (body.name) {
            msg.reply(`Segue a definição da condição :point_right: ${body.name} :point_left: :`)
            const embed = buildMessage(body.desc.map(d => `:game_die: ${d}`), body.name)
            msg.channel.send(embed)
        } else {
            msg.reply(`Essa condição não foi localizada :cry:`)
        }
    }
}

const commandInvalid = async msg => {
    if (msg.content === '!condition')
        msg.reply('Coloque o nome da condição na frente de !condition <espaço> <nome da condição>')
}

bot.on('message', allConditions)
bot.on('message', specificCondition)
bot.on('message', commandInvalid)