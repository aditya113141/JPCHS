// src/components/Header/Header.js (Responsive)
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // State to manage whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
        <div className="navbar-container">
            <Link to="/" className="logo" onClick={handleLinkClick}>
                <img src="assets/logo.jpeg" alt="Jai Prakash College Of Health Science" />
                <span>Jai Prakash College Of Health Science</span>
            </Link>

            {/* Hamburger Menu Icon - only visible on mobile via CSS */}
            <div className={`hamburger ${menuOpen ? 'is-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Links */}
            <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
                <NavLink to="/" className="nav-link" onClick={handleLinkClick}>HOME</NavLink>
                <NavLink to="/about" className="nav-link" onClick={handleLinkClick}>ABOUT US</NavLink>
                <NavLink to="/courses" className="nav-link" onClick={handleLinkClick}>COURSES</NavLink>
                <NavLink to="/gallery" className="nav-link" onClick={handleLinkClick}>GALLERY</NavLink>
                <NavLink to="/contact" className="nav-link" onClick={handleLinkClick}>CONTACT US</NavLink>
            </nav>
            
            <a href="#" className="whatsapp-btn">WHATSAPP US</a>
        </div>
    </header>
  );
};

export default Header;
