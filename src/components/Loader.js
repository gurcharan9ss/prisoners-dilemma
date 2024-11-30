import React from 'react';
import '../css/Loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="wand">
                <div className="sparkles sparkle1"></div>
                <div className="sparkles sparkle2"></div>
                <div className="sparkles sparkle3"></div>
                <div className="sparkles sparkle4"></div>
                <div className="sparkles sparkle5"></div>
            </div>
            <p className="loading-text">Loading...</p>
        </div>
    );
};

export default Loader;