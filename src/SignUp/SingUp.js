import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import logoimg from '../images/logo-thumbnail.png';

const SingUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformpassword, setconformpassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const navigate = useNavigate()
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConformPassword = event => {
        setconformpassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault()

        if (password !== conformpassword) {
            setError("Password doesn't match");
            return;
        }

        if (password.length < 6) {
            setError('Password should be 6 character more..')
            return;
        }

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='form-container'>
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="conform-password">Conform Password</label>
                        <input onBlur={handleConformPassword} type="password" name="" id="conform-password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input type="submit" className='form-submit' value="Sign Up" />
                    <p className='new-amajhon'>
                        Already have an account <Link className='form-link' to="/login">Please Login</Link>
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

export default SingUp;