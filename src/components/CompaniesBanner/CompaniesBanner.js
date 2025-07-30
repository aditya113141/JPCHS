import React from 'react';
import './CompaniesBanner.css';

const CompaniesBanner = () => {
    return (
        <section className="companies-banner">
            <div className="companies-overlay"></div>
            <div className="container companies-content">
                <h2>We've worked with the greatest companies in the world</h2>
                <a href="/contact" className="cta-button">Get In Touch</a>
            </div>
        </section>
    );
};

export default CompaniesBanner; // <-- Make sure this line exists