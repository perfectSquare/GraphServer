import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String
    island(id: ID!): Island
    islands: [Island!]!  
  }
  type Island {
    id: ID!
    name: String!
    nick: String!
    images: [String!]!
    country: String!    
    hostIntro: String!
    rent: Int!
    description: String!    
    hostID: ID!
    host: Host
    offers: Offers
  }
  type Offers {
    bathroom: Bathroom
  }
  type Bathroom {
    hairDryer: Boolean
    shampoo: Boolean
    hotWater: Boolean
    showerGel: Boolean
  }
  type Host {
    id: ID!
    name: String!
    joinedDate: String!
    image: String!
    description: String!
    language: [String!]!
  }
`;