import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import logoimg from '../../images/logo-thumbnail.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleSigninUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSigninUser} >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input type="submit" className='form-submit' value="Login" />
                    <p className='new-amajhon'>
                        New to Ema-jhon <Link className='form-link' to="/signup">Create an account</Link>
                    </p>
                    <div className='form-line'>
                        <hr />
                        <h3>or</h3>
                        <hr />
                    </div>
                    <button className='auth-btn'> <img src={logoimg} alt="" /> Sing in with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;