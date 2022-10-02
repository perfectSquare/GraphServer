import { islands } from './db/islands.js';
import { guests } from './db/added/guests.js';
import { levels } from './db/added/levels.js';
import { reviews } from './db/added/reviews.js';
import { hosts } from './db/added/hosts.js';

export const resolvers = {
    Query: {
      hello: () => 'hi',
      destination: (_, {id, type}) => {
        if(type == 'islands') return islands.find(i => i.id === parseInt(id))
      },
      destinations: (_, {type}) => {
        if(type == 'islands') return islands
      },
    },
    Destination: {
      guests: (parent) => {
        return guests.find(g => g.id == parent.guestID)  
      },
      reviews: (parent) => {
        return reviews.filter(r => r.reviewFor == parent.name)  
      },
      level: (parent) => {
        return levels.find(l => l.id === parent.levelID)
      },
      host: (parent) => {
        return hosts.find(h => h.id === parent.hostID)
      },
    },
  };