import React from 'react';
import './Hero.css';
import handicon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

function Hero(props) {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>news arrivals only </h2>
                <div>
                    <div className='hero-hand-icon'>
                       <p>new</p>
                       <img src={handicon} alt=''/>
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>latest Collections</div>
                    <img src={arrow_icon} alt=''/>
                </div>

            </div>
           
            <div className='hero-right'>
              <img src={hero_image} alt=''/>

            </div>

        </div>
    );
}

export default Hero;