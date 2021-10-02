import React, { useEffect, useState } from 'react';

import { addToDb } from '../../utilities/fakedb';
import {getStoredCart} from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    const [displayProducts , setDisplayProducts] = useState([])
    useEffect(()=>{
        // console.log('product api call')
        const url ='./products.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
    });
}
,[]);
    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
            const addedProduct = products.find(product => product.key ===key);
            if(addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity ;
                storedCart.push(addedProduct);
            }
            }
            setCart(storedCart);
        } 
    },[products])
    const handleAddToCart = (product) =>{
       const newCart =[...cart , product];
       setCart(newCart);
    //    save to local storage (for now)
        addToDb(product.key);
    }
    const handleSearch = event =>{
        let searchText =event.target.value;
        const matchedProducts = products.filter(pd => pd.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
      <>
            <div className="search-container">
                <input type="text"
                onChange={handleSearch}
                 placeholder="Search Product" />
            </div>
            <div className="shop-container">
               <div className="product-container">
            {
                displayProducts.map( product =>  <Product
                         key={product.key}
                        product={product} 
                        handleAddToCart={handleAddToCart} >
                </Product>)
            }
               </div>
               <div className="cart-container">
                    <Cart cart={cart}></Cart>
               </div>
            </div>
      </>
    );
};

export default Shop;