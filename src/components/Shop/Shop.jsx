import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";


const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setcart] = useState([]);
    console.log(cart);


    useEffect(() => {
        fetch("products.json")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const nerCart = [...cart, product]
        setcart(nerCart);
    };

    return (
        <div className='shop-container'>
            <div className="product-container">

                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}

                />)}

            </div>

            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Items: {cart.length}</p>

            </div>

        </div>
    );
};

export default Shop;