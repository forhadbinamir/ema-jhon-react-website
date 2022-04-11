import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth)

    const handleSingOut = () => {
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <ul>
                <Link to="/shop">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <button onClick={handleSingOut}>Sign Out</button>
                        :
                        <Link to="/login">Login</Link>

                }
            </ul>
        </nav>
    );
};

export default Header;