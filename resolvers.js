import { islands } from './db/islands.js';
import { parks } from './db/parks.js';
import { luxies } from './db/luxies.js';
import { castles } from './db/castles.js';
import { guests } from './db/added/guests.js';
import { levels } from './db/added/levels.js';
import { reviews } from './db/added/reviews.js';
import { hosts } from './db/added/hosts.js';
import { rules } from './db/added/rules.js';
import { hr } from './db/added/hostReviews.js';

import { reviewsAM } from './db/am/reviews.js';

// amazon
import { accessories } from './db/am/electronics/accessories.js';
import { carts } from './db/am/carts.js';

export const resolvers = {
    Query: {
      hello: () => 'hi',
      destination: (_, {id, type}) => {
        if(type == 'islands') return islands.find(i => i.id === parseInt(id))
        else if(type == 'parks') return parks.find(i => i.id === parseInt(id))
        else if(type == 'luxies') return luxies.find(i => i.id === parseInt(id))
        else if(type == 'castles') return castles.find(i => i.id === parseInt(id))
      },
      destinations: (_, {type}) => {
        if(type == 'islands') return islands
        else if(type == 'parks') return parks
        else if(type == 'luxies') return luxies
        else if(type == 'castles') return castles
      },
      host: (_, {id}) => hosts.find(h => h.id == id),

      // amazon
      carts: () => {
        return carts
      },
      product: (_, { id, type }) => {
        if(type == 'accessories') return accessories.find(i => i.id === parseInt(id))
      },
      products: (_, { type }) => {
        if(type == 'accessories') return accessories
      },
      products25: (_, { type }) => {
        if(type == 'accessories') return accessories.filter((ac) => ac.price <= 25 && ac.price != -1)
      },
      products2550: (_, { type }) => {
        if(type == 'accessories') return accessories.filter((ac) => ac.price >= 25 && ac.price != -1 && ac.price <= 50)
      },
      products50Plus: (_, { type }) => {
        if(type == 'accessories') return accessories.filter((ac) => ac.price >= 50 && ac.price != -1)
      },
      productsByBrand: (_, { type, brand }) => {
        if(type == 'accessories') return accessories.filter((ac) => ac.brand[0].val == brand)
      }    
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
    },
    Product: {            
      reviews: (parent) => reviewsAM.filter((r) => r.forID === parent.id && r.cat === parent.cat)
    },

    Mutation: {
      addCart: (_, {input}) =>{
        const { cat, id, name, image, price } = input
        const lenOld = carts.length
        const cart = {
          cat: cat,
          id: id,
          name: name,
          image: image,
          price: price
        }
        carts.push(cart)
        if(lenOld < carts.length) return true
        else return false
      }
    }
    
  };