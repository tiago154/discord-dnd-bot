const { MessageEmbed } = require('discord.js')

export const buildMessage = (color, title, message) => new MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .setDescription(message)