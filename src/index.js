require('dotenv').config()
const bot = require('./bot')

require('./actions/ready')
require('./actions/conditions')
require('./actions/commands')
require('./actions/abilities')
