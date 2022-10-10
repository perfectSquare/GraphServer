import { gql }  from 'apollo-server'

export const typeDefs = gql`
  type Query {
    hello: String
    destination(id: ID!, type:String!): Destination!
    destinations(type: String!): [Destination!]!  
    host(id: ID!): Host
  }
  type Destination {
    id: ID!    
    name: String!
    nick: String!
    images: [String!]!
    distance: String!
    checkIn: String!
    checkOut: String!
    nightsLimit:Int!
    country: String!    
    hostIntro: [String!]!    
    stars: Float
    rent: Int!
    description: String!        
    moreDescription: [MoreDescription]
    hostID: ID!
    host: Host    
    serviceCharges: Int!
    cleaningFee: Int!
    guestID: Int!
    guests: Guests!
    reviewsNum: Int
    reviews(limit: Int!, offset:Int!): [Review!]!    
    reviewsLength: [Review!]!    
    levelID: ID
    level: Level
    rulesID: ID!
    rules: Rules
    cancelPolicy: String!
    notes: [String!]!
    bedrooms: [BedRoom!]!       
    destinationIntro: [DestinationIntro]
    offers: Offers!
  }
  type Offers {
    offsLength:Int!
    offersSet: [Offered]!
    moreOffers: [OffersCat!]!
  }
  type Offered {
    logo: String!
    about: String!
    more: String
  }
  type OffersCat {
    cat: String!
    catOffers: [Offered]!
  }
  type MoreDescription {
    about: String!
    desc: String!
  }
  type DestinationIntro {
    logo: String!
    about: String!
    comment: String!
  }  
  type BedRoom {
    num: Int!
    bedType: String!
    single: Int!
    bedImage: String
  }
  type Rules {
    id: ID!
    inTime: String!
    outTimeShow: Boolean!
    outTime: String!
    smokingShow: Boolean!
    smoking: Boolean!
    petsShow: Boolean!
    pets: Boolean!
    partiesShow: Boolean!
    parties: Boolean!
    suitableShow: Boolean!
    suitable: Boolean!
    selfCheckInShow: Boolean!
    selfCheckIn: Boolean!
  }
  type Review {
    id:ID!        
    reviewFor: String!
    customer: String
    customerImage: String
    commentDate: String
    joineDate: String
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
  
  type Host {
    id: ID!
    name: String!
    joinedDate: String!
    hostLogo: String!
    reviewsNum: Int!
    identity: Boolean!
    description: String!
    language: [String!]!
    verified: [String!]!
    responseRate: Int!
    responseTime: String!
    lives: String!
    speaks: String!
    work: String!
    listing: [HostDestinationsList!]!    
    hostReviews: HostReviews!
  }
  type HostReviews {
    id: ID!
    hostID: ID!
    reviews: [ReviewForHost!]!
  }
  type ReviewForHost {
    place: String!
    placeLogo: String!
    placeDate: String!
    placeReviews: [Review!]!
  }
  type HostDestinationsList {
    cat: String!
    destinationID: ID!
    image: String!
    reviewsNum: Int!
    about: String!
    name: String!
    stars: Float!
    rent: Int!
  }
`;