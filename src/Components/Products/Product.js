import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="All img"></img>
            <div className='card-items'>
                <h4>{name}</h4>
                <h3>Price ${price}</h3>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => props.addToCardHandler(props.product)} className='btn-card'>
                <p className='btn-text'>Add to Card </p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>

    );
};

export default Product; 