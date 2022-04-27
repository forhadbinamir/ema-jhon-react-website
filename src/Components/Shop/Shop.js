import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {

    const [cart, setCart] = useCart()
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 10)))
    }, []);


    const addToCardHandler = (selectedCart) => {
        const exists = cart.find(product => product._id === selectedCart._id);
        let newCart = [];
        if (!exists) {
            selectedCart.quantity = 1;
            newCart = [...cart, selectedCart]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedCart._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedCart._id)
    }
    return (
        <div className="container">
            <div className='shop-area'>
                <div className="shop-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            addToCardHandler={addToCardHandler}
                        >
                        </Product>)
                    }
                </div>
                <div className="shop-summery">
                    <Cart cart={cart}>
                        <Link to='/orders'>Review Products</Link>
                    </Cart>
                </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number =>

                            <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>
                        )
                    }
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div >

        </div>
    );
};

export default Shop;