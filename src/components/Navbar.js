
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import '../css/Glow-button.css';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container-fluid">

        <Link to="/" className="navbar-brand">
          
 

          
        <span class='glowing-txt'>P
          
          <span class='faulty-letter'>ris</span>
          oner
          <span class='faulty-letter'>'s </span>
          D
          <span class='faulty-letter'>il</span>
          emma
          </span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/instructions">Instructions</Link>
            <Link className="nav-link" to="/about">About</Link>
            <button onClick={toggleDarkMode} className="btn btn-sm ms-3">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
