// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './cssHeader.css';

const Header = () => {
    return (
        <div className='header'>
            <h1> Call a friend</h1>
            <h3>Your Friendly contact App</h3>
            <div className='titik'>
                <span>........................</span>
            </div>
        </div>
    )
}

export default Header;