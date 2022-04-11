import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const Shipping = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    // const location = useLocation()

    // const from = location.state?.from?.pathname || '/';

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handleNumberBlur = event => {
        setAddress(event.target.value)
    }
    // if (user) {
    //     navigate(from, { replace: true })
    // }
    const handleSigninUser = event => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div>
                <h1>Shipping Address</h1>
                <form onSubmit={handleSigninUser} >
                    <div className="input-group">
                        <label htmlFor="email">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="" id="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user.email} readOnly type="email" name="" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="" id="address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Phone Number</label>
                        <input onBlur={handleNumberBlur} type="text" name="" id="number" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input type="submit" className='form-submit' value="Add Shipping" />

                </form>
            </div>
        </div>
    );
};

export default Shipping;