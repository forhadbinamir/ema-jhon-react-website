import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])

    const addToCardHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className="container">
            <div className='shop-area'>
                <div className="shop-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addToCardHandler={addToCardHandler}
                        ></Product>)
                    }
                </div>
                <div className="shop-summery">
                    <h2>Shop Summery</h2>
                    <p>Select Items: {cart.length}</p>
                </div>
            </div >
        </div>
    );
};

export default Shop;