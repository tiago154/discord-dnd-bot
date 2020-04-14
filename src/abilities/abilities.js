const factoryAbilities = ({ body }) => body.results.map(ability => ability.name)

module.exports = { factoryAbilities }