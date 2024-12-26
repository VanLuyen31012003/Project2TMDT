import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart={};
    for(let index =0;index<all_product.length;index++)
    {
        cart[index]=0
    }
    return cart;
}
const ShopContextProvider=(props)=>{
 
    const [cartItems,setCartItems]=useState(getDefaultCart())
    useEffect(()=>{
        const total = gettotalcaraccount();
    console.log("Tổng giá trị giỏ hàng:", total);

    },[cartItems])
  
    const addtoCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems[itemId]+"â"+ itemId)
        console.log(cartItems)
    }
    const removefromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    const gettotalcaraccount=()=>{
        let totalamount=0
        console.log("xin chào")
        for(const item in cartItems)
        {
            console.log(totalamount+"aa2")
            if(cartItems[item]>0)
            {
                let iteminf= all_product.find((product)=>product.id===Number(item))
                totalamount+=iteminf.new_price*cartItems[item]
                console.log(totalamount+"aa")              
            }     
        }
        return totalamount;
    }
    const gettotalitem=()=>{
        let totalamount=0      
        for(const item in cartItems)
        {         
            if(cartItems[item]>0)
            {
                totalamount+=cartItems[item];             
            }     
        }
        return totalamount;
    }
 
    const contextvalue={
        all_product ,
        cartItems,
        addtoCart,removefromCart,
        gettotalitem,
        gettotalcaraccount

    }
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
