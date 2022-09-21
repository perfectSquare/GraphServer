const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
      hello: () => 'https://a0.muscache.com/im/pictures/miso/Hosting-22235004/original/f17d4d98-ec7f-4e0d-b233-eb00f2b1cb3b.jpeg?im_w=720'
    },
  };

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