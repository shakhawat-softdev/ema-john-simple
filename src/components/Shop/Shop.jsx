import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";


const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setcart] = useState([]);
    // console.log(cart);


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
                <Cart cart={cart} />
            </div>

        </div>
    );
};

export default Shop;