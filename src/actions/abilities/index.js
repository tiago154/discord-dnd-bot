const bot = require('../../bot')
const { get, endpoint } = require('../../services')
const { factoryAbilities } = require('./abilities')
const buildMessage = require('../../helpers/build-message')
const invalidCommand = require('../../helpers/invalid-command')

const COLOR = 'GREEN'
const INVALIDCOMMAND = '!ability'
const INVALIDMESSAGE = 'Coloque o nome da habilidade na frente de !ability <espaço> <nome da habilidade>'

const allAbilities = async msg => {
    if (msg.content === '!abilities') {
        const result = await get(endpoint.abilities)
        const abilities = factoryAbilities(result).map(c => `:large_blue_diamond: ${c}`)
        msg.reply('Segue todas as habilidades:')
        const embed = buildMessage(COLOR, 'Abilities', abilities)
        msg.channel.send(embed)
    }
}

const specificAbility = async msg => {
    if (/^!ability\s.*/.test(msg.content)) {
        const abilityRaw = msg.content.split(' ')[1].toLowerCase()
        const { body } = await get(endpoint.abilities, abilityRaw)
        if (body.name) {
            msg.reply(`Segue a descrição da habilidade :point_right: ${body.name} :point_left: :`)
            const embed = buildMessage(
                COLOR,
                body.full_name,
                body.desc,
                {
                    fieldName: 'Skills',
                    value: body.skills.map(s => s.name)
                }
            )
            msg.channel.send(embed)
        } else {
            msg.reply(`Essa habilidade não foi localizada :cry:`)
        }
    }
}

bot.on('message', allAbilities)
bot.on('message', specificAbility)
bot.on('message', invalidCommand(INVALIDMESSAGE, INVALIDCOMMAND))