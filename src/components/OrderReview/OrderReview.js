import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const removeHandler = (key) => {
    const newCart = cart.filter((pd) => pd.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  const handlePlaceOrder = () =>{
    history.push("/placeOrder");
    setCart([]);
    clearTheCart();
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            removeHandler={removeHandler}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
        <button
        onClick={handlePlaceOrder} 
         className="regular-btn">Place order</button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
