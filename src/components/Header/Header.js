// src/components/Header/Header.js (Updated)
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // State to manage whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);
  // State to manage the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to close the main mobile menu
  const handleCloseMenus = () => {
    setMenuOpen(false);
  };

  // Function to close all menus when a dropdown link is clicked
  const handleDropdownLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    // Ensure dropdown closes if mobile menu is closed
    if (menuOpen) {
      setDropdownOpen(false);
    }
  };
  
  // Toggle dropdown on mobile click
  const toggleDropdown = (e) => {
      e.stopPropagation(); // Prevents menu from closing immediately on mobile
      setDropdownOpen(!dropdownOpen);
  }

  return (
    <header className="site-header">
        <div className="navbar-container">
            <Link to="/" className="logo" onClick={handleCloseMenus}>
                <img src="assets/logo.jpeg" alt="Jai Prakash College Of Health Science" />
                <span>Jai Prakash College Of Health Science</span>
            </Link>

            {/* Hamburger Menu Icon */}
            <div className={`hamburger ${menuOpen ? 'is-active' : ''}`} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Links */}
            <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
                <NavLink to="/" className="nav-link" onClick={handleCloseMenus}>HOME</NavLink>
                <NavLink to="/about" className="nav-link" onClick={handleCloseMenus}>ABOUT US</NavLink>
                <NavLink to="/courses" className="nav-link" onClick={handleCloseMenus}>COURSES</NavLink>
                
                {/* Admission Dropdown Container */}
                <div 
                    className="dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    {/* This is a button styled like a nav-link. We use a button for accessibility. */}
                    {/* For mobile, we need an onClick to toggle the dropdown */}
                    <button className="nav-link dropdown-btn" onClick={toggleDropdown}>
                        ADMISSION
                    </button>
                    
                    {/* The actual dropdown menu */}
                    <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                        <NavLink to="/admission-procedure" onClick={handleDropdownLinkClick}>Admission Procedure</NavLink>
                        <NavLink to="/admission-form" onClick={handleDropdownLinkClick}>Admission Form</NavLink>
                        <NavLink to="/enquiry-form" onClick={handleDropdownLinkClick}>Enquiry Form</NavLink>
                        <NavLink to="/apply-online" onClick={handleDropdownLinkClick}>Apply Online</NavLink>
                        <NavLink to="/eligibility" onClick={handleDropdownLinkClick}>Eligibility</NavLink>
                    </div>
                </div>

                <NavLink to="/gallery" className="nav-link" onClick={handleCloseMenus}>GALLERY</NavLink>
                <NavLink to="/contact" className="nav-link" onClick={handleCloseMenus}>CONTACT US</NavLink>
            </nav>
            
            <a href="#" className="whatsapp-btn">WHATSAPP US</a>
        </div>
    </header>
  );
};

export default Header;
