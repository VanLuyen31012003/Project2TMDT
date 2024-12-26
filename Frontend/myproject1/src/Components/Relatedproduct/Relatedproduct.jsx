import React from 'react';
import './Relatedproduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item';
function Relatedproduct(props) {
    return (
        <div className='relatedproducts'>
        <h1>Related Product</h1>
        <hr/>
        <div className='relatedproducts-item'>
        {
                data_product.map((item,index)=>{
                    return(<Item key={index} id={item.id} name ={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}S />)
                })
            }
        </div>
          
        </div>
    );
}

export default Relatedproduct;