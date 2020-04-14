const request = require('superagent')

const endpoint = {
    conditions: 'conditions/',
    abilities: 'ability-scores/'
}

const get = async (endpoint, path = '') => await request.get(`${process.env.DND_API}${endpoint}${path}`).catch(() => ({ body: '' }))

module.exports = {
    get,
    endpoint
}