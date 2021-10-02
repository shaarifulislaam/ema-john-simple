import { useEffect } from "react"
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = products =>{
    const [cart , setCart]= useState([])
    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart();
            const stroedCart = [];
            for(const key in savedCart){
                const addedProuct = products.find(product => product.key === key);
                if(addedProuct){
                    //set quantity 
                    const quantity = savedCart[key]
                    addedProuct.quantity = quantity;
                    stroedCart.push(addedProuct);
                }
            }
            setCart(stroedCart);
        }
    },[products]);
    return [cart , setCart];
}
export default useCart;