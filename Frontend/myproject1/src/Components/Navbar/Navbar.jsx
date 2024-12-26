import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
function Navbar(props) {
    const [menu,setMenu]=useState("shop")
    const{gettotalitem}=useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>SHOPPER</p>              
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop {menu==='shop'?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setMenu("men")}}><Link to='/men'>Men {menu==='men'?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setMenu("women")}}><Link to='/women'>Women {menu==='women'?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setMenu("kid")}}><Link to='/kid'>Kid {menu==='kid'?<hr/>:<></>}</Link></li>
            </ul>
            <div className='nav-login-cart'>
                <Link to ='/login'><button>Login</button></Link>
                <Link to= '/cart'><img src={cart_icon} alt=''/>
                </Link>
                <div className='nav-cart-count'>{gettotalitem()}</div>
                
            </div>
        </div>
    );
}

export default Navbar;