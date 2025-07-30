import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="navbar-container">
        <Link to="/" className="logo"> {/* Changed to Link */}
          <img src="https://placehold.co/70x70/1e3a8a/fff?text=Logo" alt="Reyansh College Logo" />
          <span>REYansh COLLEGE OF HOTEL MANAGEMENT</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {/* Changed all to Link components */}
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li><Link to="/about" className="nav-link">ABOUT US</Link></li>
            <li><Link to="/courses" className="nav-link">COURSES</Link></li>
            <li><Link to="/gallery" className="nav-link">GALLERY</Link></li>
            <li><Link to="/contact" className="nav-link">CONTACT US</Link></li>
          </ul>
        </nav>
        <a href="#" className="whatsapp-btn">WHATSAPP US</a>
      </div>
    </header>
  );
};

export default Header;