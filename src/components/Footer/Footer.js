// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-column">
                    <h4>ABOUT US</h4>
                    <p>E-17a,Umarani Complex,</p>
                    <p>Opp-Tata Jasper</p>
                    <p>Industries,Borgaon(p),Nizambad,503230</p>
                    <p>+91 7416387602</p>
                    <p>+91 7416387603</p>
                    <p>rchm.nzb@gmail.com</p>
                </div>
                <div className="footer-column">
                    <h4>MENU</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">contact us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>SOCIAL MEDIA</h4>
                    <div className="social-links">
                        <a href="#" className="social-icon instagram" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="social-icon facebook" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="social-icon email" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="#" className="social-icon youtube" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
