import React from 'react';
import './Resister.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Resister = () => {
    const [createUserWithEmailAndPassword,user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
        navigate('/');
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSignUp} className='form'>
                <h2>Please Resister as a Volunteer</h2>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="eamil" name='email' placeholder='Email' required />
                <br />
                <input type="password" name='password' placeholder='Password' required />
                <br />
                <input type="password" name='confirmPassword' placeholder='Confirm Password' required />
                <br />
                <input className='button-style' type="submit" value="Resister" />
                <p className='link-style'>Already have an account <Link to={'/login'}>Please Login</Link></p>
            </form>
        </div>
    );
};

export default Resister;