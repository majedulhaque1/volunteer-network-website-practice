import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [ signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleSignIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        navigate('/');
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSignIn} className='form'>
                <h2>Please login</h2>
                <input type="eamil" name='email' placeholder='Email' required />
                <br />
                <input type="password" name='password' placeholder='Password' required />
                <br />
                <input className='button-style' type="submit" value="Login" />
                <p className='link-style'>New to website <Link to={'/resister'}>Please Resister</Link></p>
            </form>
        </div>
    );
};

export default Login;