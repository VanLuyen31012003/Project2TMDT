import React, { useContext } from 'react';
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
function ProductDisplay(props) {
    const {product}=props;
    const {addtoCart}=useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt=""/>
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_dull_icon} alt=''/>
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices' >
                    <div className='productdisplay-right-price-old'>
                        ${product.old_price}
                    </div>
                    <div className='productdisplay-right-price-new'>
                        ${product.new_price}
                    </div>
                </div>
                <div className='productdisplay-right-description'>
                Đúng vậy! Trong CSS, margin: auto được sử dụng để căn giữa phần tử theo chiều ngang (horizontal alignment), nhưng chỉ khi các điều kiện sau được đáp ứng
                </div>
                <div className='productdisplay-right-size'>
                <h1>Select size</h1>
                <div className='productdisplay-right-sizes'>
                    <div className='a'>S</div>
                    <div className='a'>M</div>
                    <div className='a'>L</div>
                    <div className='a'>XL</div>
                    <div className='a'>XXL</div>

                </div>
                <button className='ab' onClick={()=>{addtoCart(product.id)}}>ADD TO CART</button>
                <p className='poductdisplay-right-category'><span>Category:</span>women, T-Shirt, Crop Top</p>
                <p className='poductdisplay-right-category'><span>Tag:</span>Modern, Lastest</p>

            </div> 
                
            </div>
            
            


        </div>
    );
}

export default ProductDisplay;