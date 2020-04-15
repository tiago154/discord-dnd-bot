const fs = require('fs')
const path = require('path')

module.exports = pathActions => {
    const actionsDirectory = path.join(process.cwd(), pathActions)
    const actions = fs.readdirSync(actionsDirectory)
    for (const action of actions) {
        require(path.join(actionsDirectory, action))
    }
}