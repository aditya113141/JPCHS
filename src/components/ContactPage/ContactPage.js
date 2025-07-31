// src/components/ContactPage/ContactPage.js (Corrected)
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './ContactPage.css';

// Reusing the ExpertTeam and CompaniesBanner components
import ExpertTeam from '../ExpertTeam/ExpertTeam';
import CompaniesBanner from '../CompaniesBanner/CompaniesBanner';

// Reusable animation wrapper
const AnimatedElement = ({ children, animation, delay = '0s' }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} style={{transitionDelay: delay}} className={`animated-element ${animation} ${isIntersecting ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

const ContactPage = () => {
    const imageCards = [
        { img: 'https://placehold.co/400x300/EFEFEF/333?text=Team', title: 'TEAM' },
        { img: 'https://placehold.co/400x300/EFEFEF/333?text=Kitchen', title: 'KITCHEN' },
        { img: 'https://placehold.co/400x300/EFEFEF/333?text=Class+Room', title: 'CLASS ROOM' },
    ];

    return (
        <div className="contact-page">
            {/* Section 1: Hero */}
            <section className="contact-hero">
                <AnimatedElement animation="fade-in">
                    <h1>Contact Us</h1>
                </AnimatedElement>
            </section>

            {/* Section 2: Office Details and Map */}
            <section className="office-section container">
                <AnimatedElement animation="fade-in-up">
                    <h2 className="section-title red decorative">OUR OFFICE</h2>
                </AnimatedElement>
                <div className="office-grid">
                    {/* This is the container for the white box on the left */}
                    <AnimatedElement animation="fade-in-up" delay="0.1s" className="office-details-box">
                        <div className="office-image">
                            <img src="https://placehold.co/600x400/DDD/333?text=Reception" alt="Office Reception" />
                        </div>
                        <div className="main-office-details">
                            <h3>Main Office</h3>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>5-17a,Umarani Complex,Opp.Tata Jasper Industries,Borgaon(p),Nizambad,503230</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone-alt"></i>
                                <span>+91 7416387602</span>
                            </div>
                             <div className="contact-item">
                                <i className="fas fa-phone-alt"></i>
                                <span>+91 7416387603</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>contact@rchmnzb.com</span>
                            </div>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement animation="fade-in-up" delay="0.2s" className="office-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.53232151184!2d78.1192153148918!3d18.68530398744485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccb8f8a5b5d5d5%3A0x8f8f8f8f8f8f8f8f!2sReyansh%20College%20of%20Hotel%20Management!5e0!3m2!1sen!2sin!4v1678886400000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Reyansh College Location"
                        ></iframe>
                    </AnimatedElement>
                </div>
            </section>

            {/* Section 3: Image Cards */}
            <section className="image-cards-section container">
                <div className="image-cards-grid">
                    {imageCards.map((card, index) => (
                        <AnimatedElement key={index} animation="fade-in-up" delay={`${index * 0.1}s`}>
                            <div className="image-card">
                                <img src={card.img} alt={card.title} />
                                <h4>{card.title}</h4>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </section>
            
            <ExpertTeam />
            <CompaniesBanner />
        </div>
    );
};

export default ContactPage;
