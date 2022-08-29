import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";

import ProductList from "./Components/ProductList/ProductList";
import ShoppingCart from "./Components/Cart";

import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  createHttpLink,
} from "@apollo/client";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { setContext } from "@apollo/client/link/context";

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

// function App() {
//   return (
//     <Router>
//       <ApolloProvider client={client}>
//         <Login />
//         <StoreProvider>
//           <ThemeProvider theme={theme}>
//             <Nav />
//             <Product
//               image={""}
//               seller={""}
//               name={"Jordans"}
//               description={""}
//               _id={""}
//               price={4}
//               quantity={4}
//             />
//             <ShoppingCart />

//             <ProductList />

//             {/* <ShoppingCart /> */}
//           </ThemeProvider>
//         </StoreProvider>
//       </ApolloProvider>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <StoreProvider>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Nav />
          
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/Signup" element={<Signup />} />

              <Route
                path="/"
                exact
                element={ <ProductList/>
             
                }
              />
            </Routes>
          </ThemeProvider>
        </ApolloProvider>
      </StoreProvider>
    </Router>
  );
}

//       <ApolloProvider client={client}>
//         <Login />
//         <StoreProvider>
//           <ThemeProvider theme={theme}>
//             <Nav />
//             <Product
//               image={""}
//               seller={""}
//               name={"Jordans"}
//               description={""}
//               _id={""}
//               price={4}
//               quantity={4}
//             />
//             <ShoppingCart />

//             <ProductList />

//             {/* <ShoppingCart /> */}
//           </ThemeProvider>
//         </StoreProvider>
//       </ApolloProvider>
//     </Router>

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
