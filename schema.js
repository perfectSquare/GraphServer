import { gql }  from 'apollo-server'

export const typeDefs = gql`
  type Query {
    hello: String
    destination(id: ID!, type:String!): Destination!
    destinations(type: String!): [Destination!]!  
  }
  type Destination {
    id: ID!    
    name: String!
    nick: String!
    images: [String!]!
    distance: String!
    checkIn: String!
    checkOut: String!
    country: String!    
    hostIntro: String!    
    stars: Float
    rent: Int!
    description: String!        
    hostID: ID!
    host: Host
    offers: Offers
    offersSet: [String!]!
    serviceCharges: Int!
    guestID: Int!
    guests: Guests!
    reviewsNum: Int
    reviews: [Review!]!    
    levelID: ID
    level: Level
  }
  type Review {
    id:ID!        
    reviewFor: String!
    customer: String
    customerImage: String
    commentDate: String
    comment: String    
  }
  type Level {
    id: ID!    
    cleanliness: Float
    accuracy: Float
    communication: Float
    location: Float
    checkIn: Float
    val: Float
  }
  type Guests{
    id: ID!
    adults: Int!
    child: Int!
    infant: Int!
    pets: Int!
    description: String!
  }
  type Offers {
    bedrooms: Int!
    bedroomType: String!
    beds: Int!
    guests: Int!
    bathroom: Bathroom
  }  
  type Bathroom {
    bathrooms: Int!
    hairDryer: Boolean
    shampoo: Boolean
    hotWater: Boolean
    showerGel: Boolean
  }
  type Host {
    id: ID!
    name: String!
    joinedDate: String!
    hostLogo: String!
    reviewsNum: Int!
    identity: Boolean!
    description: String!
    language: [String!]!
    responseRate: Int!
    responseTime: String!
  }
`;