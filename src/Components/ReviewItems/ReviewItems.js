import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useProducts from '../Hooks/useProducts';
import './ReviewItems.css'
const ReviewItems = (props) => {
    const { removeSingleProduct } = props
    const { name, img, price, shipping, quantity, } = props.cart
    return (
        <div className='review-items-container'>
            <div className="cart-img">
                <img src={img} alt="" />
            </div>
            <div className="review-details">
                <div className="review-details-items">
                    <h3 title={name}>{name.length > 20 ? name.slice(0, 20) + "..." : name}</h3>
                    <h5>Price: $<span className='orange'>{price}</span> </h5>
                    <h5>Shipping:$<span className='orange'>{shipping}</span></h5>
                    <h5>Quantity:$<span className='orange'>{quantity}</span></h5>
                </div>
                <div className="review-delete-icon">
                    <button onClick={() => removeSingleProduct(props.cart)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div >
    );
};

export default ReviewItems;