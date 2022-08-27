const { gql } = require ('apollo-server-express');

const typeDefs = gql`
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

  type Query {
    products: [Product]

  }

`


module.exports= typeDefs


