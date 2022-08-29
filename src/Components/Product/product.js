import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './style.css';



function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    seller,
    name,
    description,
    _id,
    price,
    quantity
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
<<<<<<< HEAD
      <Link to={`/product/${_id}`}>
        <img
=======
      <Link to={`/products/${_id}`}>
        {/* <img
>>>>>>> 54f38112d06673b9055cc7df974cd288bf9bb9a6
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p> */}
      </Link>
      <div>
<<<<<<< HEAD
        <div> {seller}{description}{quantity}{pluralize("item", quantity)} in stock </div>
        <span>${price}</span>
=======
        {/* <div> {seller}{description}{quantity}{pluralize("item", quantity)} </div>
        <span>${price}</span> */}
>>>>>>> 54f38112d06673b9055cc7df974cd288bf9bb9a6
      </div>
      {/* <button onClick={addToCart}>Add to cart</button> */}
    </div>
  );
}

export default ProductItem;
