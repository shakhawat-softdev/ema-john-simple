import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faShoppingCart} />

import "./Product.css";

const Product = (props) => {
    const { img, name, price, quantity, ratings, ratingsCount, seller } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer : Addidas</p>
                <p>Rating : {ratings} {ratingsCount}</p>
            </div>
            <button onClick={() => { handleAddToCart(props.product) }} className='btn-cart'>Add to cart {element}
            </button>

        </div>
    ); ha
};

export default Product;