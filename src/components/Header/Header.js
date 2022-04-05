import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../image/logo.png'
import './Header.css'




const Header = () => {
    return (
        <div className='header-part'>
            <div className="header-img">
                <img src={icon} alt="" />
            </div>
            <ul>
            <Link to='/'>Home</Link>
            <Link to='/Package'>Package</Link>
            <Link to='/About'>About</Link>
            <Link to='/Dashboard'>Dashboard</Link>
            <Link to='/Review'>Review</Link>
            
           
           
            </ul>
            
        </div>
    );
};

export default Header;