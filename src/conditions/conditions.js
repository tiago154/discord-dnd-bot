const factoryConditions = ({ body }) => body.results.map(condition => condition.name)

module.exports = { factoryConditions }