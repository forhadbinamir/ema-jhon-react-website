import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    // const tax = total * 10 / 100;
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandtotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Shop Summery</h2>
            <p>Select Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Text: ${tax}</p>
            <h5>Grand Total: ${grandtotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;