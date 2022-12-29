import { gql }  from 'apollo-server'

export const typeDefs = gql`
  type Query {
    hello: String
    destination(id: ID!, type:String!): Destination!
    destinations(type: String!): [Destination!]!  
    host(id: ID!): Host
    product(id: ID!, type: String!): Product!
    products(type: String!): [Product!]!
    products25(type: String!): [Product!]!
    products2550(type: String!): [Product!]!
    products50Plus(type: String!): [Product!]!
    productsByBrand(type: String!, brand:String!): [Product!]!
    carts: [Cart!]!
  }
  type Destination {
    id: ID!    
    name: String!
    luxi: Boolean!
    luxIncluded: [LuxItem!]!
    luxServices: [LuxItem!]!
    nick: String!
    latitude: Float!
    longitude: Float!
    images: [String!]!
    luxImages: [LuxImages!]!
    distance: String!
    checkIn: String!
    checkOut: String!
    freeCancelDaysBefore: Int!
    nightsLimit:Int!
    country: String!    
    hostIntro: [String!]!    
    stars: Float
    rent: Int!
    description: String!        
    moreDescription: [MoreDescription]
    descriptionOrignal: String!        
    moreDescriptionOrignal: [MoreDescription]
    hostID: ID!
    host: Host    
    serviceCharges: Int!
    hospitalityFee: Int!
    weekDiscount: Int!
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
    bedrooms: [BedRoom!]!       
    destinationIntro: [DestinationIntro]
    offers: Offers!
    ask: Ask!
  }
  type Ask {
    gettingThere: [String]
    house: [String]
    available: [String]
    image: String!
  }
  type LuxImages {
    cat: String!
    images: [String!]!
    id:String!
  }
  type LuxItem {
    image: String!
    about: String!
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
    roomType: String!
    bedType: String!
    bedImage: String
    logo: [String!]!
  }
  type Rules {
    id: ID!
    additional: [String!]!
    rules: [Offered!]!
    safety: [Offered!]!
    cancel:[CancelBy!]!
  }
  type CancelBy {
    on: Boolean!
    about: String!
    policy: String!
    days: String!
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
  
  type Host {
    id: ID!
    name: String!
    joinedDate: String!
    hostLogo: String!
    reviewsNum: Int!
    identity: String!
    description: String!
    during: String!
    language: [String!]!
    verified: [String!]!
    responseRate: Int!
    responseTime: String!
    lives: String!
    speaks: String!
    work: String!
    listing: [HostDestinationsList!]!    
    hostReviewsLen: [ReviewForHost!]!
    hostReviews(limit: Int!, offset: Int!): [ReviewForHost!]!
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
  }

  # amazon

  type Mutation {
    addCart(input: cartInput): Boolean!
  }
  input cartInput {
    cat:String! 
    id:ID! 
    name:String! 
    image:String! 
    price:Float!
  }
  type Cart {
    cat:String! 
    id:ID! 
    name:String! 
    image:String! 
    price:Float!
  }

  type Product {
    id: ID!
    cat: String!    
    only:Int!
    name: String!
    image: String!    
    description: String!
    reviewsNum: Int!
    globals: Int!
    stars: Float!
    price: Float!
    backPrice: Float!
    best: Boolean!
    allStars: [AllStars]!

    brand: [Brand!]!
    info: [Brand!]!
    shipping: Float!
    estimated: Float!
    dots: [String!]!
    note: Boolean!
    largeImage: String!
    moreImages: [String!]!
    safe: Float!

    reviews: [ReviewAM!]!

    stock:Boolean!
    delivery:String
  }
  type ReviewAM{
    id:ID!
    forID:Int!
    cat:String!
    image:String!
    name:String!
    date:String!
    verified:Boolean!
    comment:String!
    helpful:Int!
  }
  type Brand {
    name: String!
    val: String!
  }      
  type AllStars {
    num: String!
    val: Int!
  }
`;