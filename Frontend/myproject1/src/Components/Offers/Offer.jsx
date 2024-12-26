import React from 'react';
import './Offer.css';
import exclusive_image from '../Assets/exclusive_image.png'
function Offer(props) {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>EXCLUSIVE</h1>
                <h1>OFFER FOR YOU </h1>
                <p>ONLY ON BEST FOR YOU</p>
                <button>Check Now</button>

            </div>
            <div className='offers-right'>
                <img src={exclusive_image} alt=''/>
            </div>
        </div>
    );
}

export default Offer;