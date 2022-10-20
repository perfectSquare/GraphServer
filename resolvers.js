import { islands } from './db/islands.js';
import { parks } from './db/parks.js';
import { luxies } from './db/luxies.js';
import { guests } from './db/added/guests.js';
import { levels } from './db/added/levels.js';
import { reviews } from './db/added/reviews.js';
import { hosts } from './db/added/hosts.js';
import { rules } from './db/added/rules.js';
import { hr } from './db/added/hostReviews.js';

export const resolvers = {
    Query: {
      hello: () => 'hi',
      destination: (_, {id, type}) => {
        if(type == 'islands') return islands.find(i => i.id === parseInt(id))
        else if(type == 'parks') return parks.find(i => i.id === parseInt(id))
        else if(type == 'luxies') return luxies.find(i => i.id === parseInt(id))
      },
      destinations: (_, {type}) => {
        if(type == 'islands') return islands
        else if(type == 'parks') return parks
        else if(type == 'luxies') return luxies
      },
      host: (_, {id}) => hosts.find(h => h.id == id)
    },
    Destination: {
      guests: (parent) => {
        return guests.find(g => g.id == parent.guestID)  
      },
      reviews: (parent, {limit, offset}) => {
        let all =  reviews.filter(r => r.reviewFor == parent.name)  
        return all.slice(offset,limit+2)
      },
      reviewsLength: (parent) => {
        return  reviews.filter(r => r.reviewFor == parent.name)  
      },
      level: (parent) => {
        return levels.find(l => l.id === parent.levelID)
      },
      host: (parent) => {
        return hosts.find(h => h.id === parent.hostID)
      },
      rules: (parent) => {
        return rules.find(r => r.id === parent.rulesID)
      }
    },
    Host: {      
      hostReviews: (parent, {limit, offset}) => {
        let all = hr.find(h => h.hostID === parent.id).reviews
        return all.slice(offset, limit+2)
      },
      hostReviewsLen: (parent) => hr.find(h => h.hostID === parent.id).reviews
    }
  };