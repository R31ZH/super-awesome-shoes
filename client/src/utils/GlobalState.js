import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };







// export const UserContext = React.createContext();


// const ShoppingCartProvider = (props) => {
  
//   // const [quantity, setQuantity] = useState(0);
//   // const [price, setPrice] = useState(0);
//   // const [totalPrice, setTotalPrice] = useState(0);


//   return (
//     //passing in values from login state to use elsewhere in app
//     <UserContext.Provider value={{name, setName}} {...props} /> //for some reason doesn't work without the props
//   );
// };

// export default ShoppingCartProvider;