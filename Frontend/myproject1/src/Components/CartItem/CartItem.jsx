import React, { useContext, useEffect } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
function CartItem(props) {
  const { all_product, cartItems, removefromCart,gettotalcaraccount } = useContext(ShopContext);
//   useEffect(()=>{alert("tong gia tri gio hang la:"+gettotalcaraccount())},[])
  return (
    <div className="cartitems">
      <div className="cartitems-fomat-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) 
        return <div>
          <div className="cartitems-format cartitems-fomat-main">
            <img src={e.image} alt="" className="carticon-product-icon" />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className="cartitems-quantity">{cartItems[e.id]}</button>
            <p>&{e.new_price*cartItems[e.id]}</p>
            <img
              className="cartitems-remove-icon"
              src={remove_icon}
              onClick={() => {
                removefromCart(e.id);
              }}
              alt=""
            />
          </div>
          <hr />
        </div>;
        return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
        <h1>cart total</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${gettotalcaraccount()} </p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
                <p>Shipping free</p>
                <p>Free</p>

            </div>
            <hr/>
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${gettotalcaraccount()}</h3>
            </div>
        </div>
        <button>PROCEED TO CHECHOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>if you have a promo code , enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo code"/>
                <button>Submit</button>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default CartItem;
