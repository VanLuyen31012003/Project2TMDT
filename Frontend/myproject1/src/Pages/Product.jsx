import React, { use, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import {useParams}from 'react-router-dom'
import BreadCrum from '../Components/BreadCrums/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import Relatedproduct from '../Components/Relatedproduct/Relatedproduct';
function Product(props) {
    const{ all_product} =useContext(ShopContext)
    const {prodcutId}=useParams();
    const product =all_product.find((e)=>e.id===Number(prodcutId))
    return (
        <div>
            <BreadCrum product={product}/>
            <ProductDisplay product={product}/>
            <Descriptionbox/>
            <Relatedproduct/>
        </div>
    );
}

export default Product;