import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';



const OrderReview = () => {
 const [products , setProducts] = useProducts();
 const [cart , setCart] = useCart(products);
 const removeHandler = (key) =>{
        const newCart = cart.filter(pd => pd.key !==key);
        setCart(newCart);
        removeFromDb(key);
 }
    return (
        <div className="shop-container">
           <div className="product-container">
                {
                    cart.map(product => <ReviewItem 
                    key={product.key}
                    product={product}
                    removeHandler={removeHandler}
                    ></ReviewItem>)
                }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default OrderReview;