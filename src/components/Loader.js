import React from 'react';
import '../css/Loader.css';
import '../css/Glow-button.css';
import logo from '../images/logo192.png'; // Make sure to replace this with the actual path to your logo image

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
             
            <p className="loading-text">
                <span className='glowing-txt'>P
                    <span className='faulty-letter'>ris</span>
                    oner
                    <span className='faulty-letter'>'s </span>
                    D
                    <span className='faulty-letter'>il</span>
                    emma
                </span>
            </p>
        </div>
    );
};

export default Loader;