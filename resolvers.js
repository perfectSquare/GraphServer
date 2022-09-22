const {islands} = require('/db/islands.json')

module.exports = {
    Query: {
      hello: () => 'hi',
      island: (_, {id}) => islands.find(i => i.id === id),
      islands: () => islands      
    },
  };