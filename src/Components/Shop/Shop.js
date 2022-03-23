import React, { useEffect, useState } from 'react';
import { addToDb, getStoreData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 10)))
    }, []);

    useEffect(() => {
        const stored = getStoreData();
        const saveCart = [];
        for (const id in stored) {
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
            if (addedProduct) {
                const quantity = stored[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            setCart(saveCart);
        }
    }, [products]);

    const addToCardHandler = (selectedCart) => {
        const exists = cart.find(product => product.id === selectedCart.id);
        let newCart = [];
        if (!exists) {
            selectedCart.quantity = 1;
            newCart = [...cart, selectedCart]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedCart.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedCart.id)
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
                    <Cart cart={cart}></Cart>
                </div>
            </div >
        </div>
    );
};

export default Shop;