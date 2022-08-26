import React from 'react';
import { StoreProvider } from './utils/GlobalState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./Components/ProductList/ProductList";
import ShoppingCart from "./Components/Cart";

import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  createHttpLink,
} from "@apollo/client";
import Login from "./Components/login/login";
import { setContext } from "@apollo/client/link/context";

// import Home from './pages/Home';
import Nav from "./Components/navBar/navBar";
import Product from "./Components/Product/product";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#5b5b5b",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ffea00",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
         <ApolloProvider client={client}>
        <Login />
        <StoreProvider>
          <ThemeProvider theme={theme}>
            <Nav />
            <Product
              image={""}
              seller={""}
              name={"Jordans"}
              description={""}
              _id={""}
              price={4}
              quantity={4}
            />
            <ShoppingCart />
            <ProductList />
          </ThemeProvider>
        </StoreProvider>
      </ApolloProvider>
    </Router>
  );
}
export default App;

// import Nav from './Components/navBar/navBar';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });
