import { islands } from './db/islands.js';

export const resolvers = {
    Query: {
      hello: () => 'hi',
      island: (_, {id}) => islands.find(i => i.id === parseInt(id)),
      islands: () => islands      
    },
  };