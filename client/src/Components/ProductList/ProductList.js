import * as React from 'react';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { Category } from '@mui/icons-material';

import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import { useQuery } from "@apollo/client";
import Product from "../Product/product"


// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import '../../styles/productlist.css'
import Container from '@mui/material/Container'

import { Button } from '@mui/material';

//  function ProductList() {
//   // const [state, dispatch] = useStoreContext();

//   const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
//   const products = data?.products || []

//   return (
       
//     <ImageList l={{ width: 100, height: 100, border: '3px solid black', margin:'100px', padding:'150px' }} cols={2} gap={50} rowHeight={704}>
       
//         <div className="flex-row">
//           {products.map((product) => (
//             <Product
//               key={product._id}
//               category={product.category}
//               image={product.image}
//               title={product.title}
//               price={product.price}
//               quantity={product.quantity}
//             />
//           ))}
//         </div>
      
        
        
      
    
      
//     </ImageList>
     
//   );
// }

// export default ProductList;

// import Product from '../Product';



export default function TitlebarBelowImageList() {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || []

  return (
    <Container maxWidth='lg'>

     
    <ImageList sx={{ width: 1300, height: 1000, border: '3px solid black', gap: '15px', rowHeight:'auto', display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', cols:'6'}}>
      {products.map((product) => (
         <Link to="/Detail" key={product.img} >
        <ImageListItem >

    
          <img
            src={`${product.image}?w=248&fit=crop&auto=format`}
            srcSet={`${product.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={product.title}
            loading="lazy"
          />
          {/* <div className="flex-row">
          {products.map((product) => (
            <Product
              key={product._id}
              category={product.category}
              image={product.image}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div> */}
          <ImageListItemBar

            title={product.title}
            subtitle={<span>Price: {product.price}</span>}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${product.title}`}>

                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        </Link>
      ))}
    </ImageList>
    
    </Container>
  );
}





