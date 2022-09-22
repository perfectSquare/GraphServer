const { ApolloServer, gql } = require('apollo-server');
const { resolvers } = require('./resolvers.js');

const typeDefs = gql`
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
  type Location{
    lat: Float!
    lon: Float!
  }
`;

  const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');
  
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    introspection: true,
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
    **/
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
      🚀  Server is ready at ${url}
      📭  Query at https://studio.apollographql.com/dev
    `);
  });