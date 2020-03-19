const request = require('superagent')
const CONDITIONS = '/conditions'

const get = async (path = '') => await request.get(`${process.env.DND_API}${CONDITIONS}${path}`).catch(() => ({ body: '' }))

module.exports = {
    get
}