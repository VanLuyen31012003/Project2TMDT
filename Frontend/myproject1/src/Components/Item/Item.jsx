import React from 'react';
import './Item.css'
import { Link, useNavigate } from 'react-router-dom';
function Item(props) {
    const navigate = useNavigate();
    const checlcl=()=>{
        console.log(props.id)
        
        try {
            navigate(`/product/${props.id}`)
            window.scrollTo(0,0)
        } catch (error) {
            alert(`/product/${props.id}`)
        }
       
        
        
    }
    return (
        <div onClick={()=>{checlcl()}} className='item'>
        {/* <Link to={`/product/${props.id}`}> <img src={props.image} alt=''/></Link> */}
        <img src={props.image} alt=''/>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-prices-new'>{props.new_price}</div>
                <div className='item-prices-old'>{props.old_price}</div>
            </div>
            
            
        </div>
    );
}

export default Item;