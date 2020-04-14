const { MessageEmbed } = require('discord.js')

module.exports = (color, title, description, addField = {}) => {
    const message = new MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setDescription(description)

    if (Object.keys(addField).length && addField.value.length)
        message.addField(addField.fieldName, addField.value)

    return message
}