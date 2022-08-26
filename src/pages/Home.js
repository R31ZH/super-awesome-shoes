import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import { StoreProvider } from '../utils/GlobalState'

import ProductList from '../Components/ProductList/ProductList'
import ShoppingCart from '../Components/Cart';



import Nav from '../Components/navBar/navBar'
import Product from '../Components/Product/product'


import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#5b5b5b',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#ffea00',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


const Home = () => {
  return (
    <Router>
<StoreProvider>
<ThemeProvider theme={theme}>
    <Nav />
   
    {/* <ShoppingCart /> */}

    
   
     <ProductList />
     

   
     

    {/* <ShoppingCart /> */}

    </ThemeProvider>

    </StoreProvider>
     
    </Router>

  );
}

export default Home;
