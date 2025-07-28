import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="navbar-container">
        <a href="/" className="logo">
          <img src="https://placehold.co/70x70/1e3a8a/fff?text=Logo" alt="Reyansh College Logo" />
          <span>REYansh COLLEGE OF HOTEL MANAGEMENT</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="/" className="nav-link active">HOME</a></li>
            <li><a href="/about" className="nav-link">ABOUT US</a></li>
            <li><a href="/courses" className="nav-link">COURSES</a></li>
            <li><a href="/gallery" className="nav-link">GALLERY</a></li>
            <li><a href="/contact" className="nav-link">CONTACT US</a></li>
          </ul>
        </nav>
        <a href="#" className="whatsapp-btn">WHATSAPP US</a>
      </div>
    </header>
  );
};

export default Header;