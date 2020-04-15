const { Client } = require('discord.js')
const bot = new Client()

bot.login(process.env.BOT_TOKEN)

module.exports = bot