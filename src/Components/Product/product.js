import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './style.css';




function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    _id,
    title,
    image,
    price,
    category,
  } = item;

  // const { cart } = state

  const addToCart = () => {
    const itemInCart = state.cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/product/${_id}`}>
        <img
          src={`/src/images/${image}`}
        />
        <p>{title}</p>
      
      <div>
        <div> {category}</div>
        <span>${price}</span>
      </div>
      </Link>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
