// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-column">
                    <h4>About JPCHS</h4>
                    <p>Fatepur Chirimara Kajipur</p>
                    <p>P.O - Thathan Bujurge, P.S - Hajipur</p>
                    <p>Hajipur, Bihar 844125</p>
                    <p>📞 +91 9876543210</p>
                    <p>📞 +91 9876543211</p>
                    <p>✉️ contact@jpchs.in</p>
                </div>
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Connect With Us</h4>
                    <div className="social-links">
                        <a href="#" className="social-icon instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="mailto:contact@jpchs.in" className="social-icon email" aria-label="Email"><i className="fas fa-envelope"></i></a>
                        <a href="#" className="social-icon youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
