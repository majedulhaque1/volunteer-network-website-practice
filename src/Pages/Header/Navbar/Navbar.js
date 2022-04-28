import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='navbar-container'>
            <div className='logo-area'>
                <img src={logo} alt="" />
            </div>
            <nav className='navbar'>
                <ul className='nav-items'>
                    <Link className='nav-item' to={'/'}>Home</Link>
                    <Link className='nav-item' to={'/donation'}>Donation</Link>
                    <Link className='nav-item' to={'/events'}>Events</Link>
                    <Link className='nav-item' to={'/blog'}>Blog</Link>
                    {
                        user ? <button className='signout-btn' onClick={() => signOut(auth)}>Sign Out</button>
                    :<Link className='resister' to={'/resister'}>Resister</Link>
                    }
                    <Link className='admin' to={'/admin'}>Admin</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;