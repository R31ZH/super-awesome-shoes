

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
  }
  type Product {
    _id: ID
    category: String
    image: String
    title: String
    price: Int
    seller: String
    description: String
    quantity: Int
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    products: [Product]
    product(_id: ID!): Product
    productsbyCategory(category: ID!): [Product]
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
