module.exports = (text, command) => msg => {
    if (msg.content === command)
        msg.reply(text)
}