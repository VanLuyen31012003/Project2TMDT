import React from 'react';
import './Newcollection.css'
import newcollection from '../Assets/new_collections'
import Item from '../Item/Item';
function Newcollection(props) {
    return (
        <div className='newcollection'>
            <h1>new collection</h1>
            <hr/>
            <div className='newcollectionitem'>
                {
                newcollection.map((item,index)=>{
                    return <Item key={index} id={item.id} name ={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
            </div>
            
        </div>
    );
}

export default Newcollection;