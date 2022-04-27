import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();

    const removeSingleProduct = products => {
        const rest = cart.filter(pd => pd._id !== products._id);
        console.log(rest)
        setCart(rest);
        removeFromDb(products._id)
    }
    return (
        <div className='shop-area'>
            <div className="review-shop-container">
                {
                    cart.map(product => <ReviewItems
                        key={product._id}
                        cart={product}
                        removeSingleProduct={removeSingleProduct}
                    >
                        <h3>review items</h3>
                    </ReviewItems>)
                }
            </div>
            <div className="shop-summery">
                {
                    <Cart cart={cart}>
                        <Link to="/shipping">Proceed to Shipping</Link>
                    </Cart>
                }
            </div>
        </div>
    );
};

export default Orders;