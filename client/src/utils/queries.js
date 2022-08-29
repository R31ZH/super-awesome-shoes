import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  
    query products {
    products {
      _id
      title
      image
      price
      
      category 
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      category
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;
