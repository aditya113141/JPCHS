import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './ContactPage.css';

import ExpertTeam from '../ExpertTeam/ExpertTeam';
import CompaniesBanner from '../CompaniesBanner/CompaniesBanner';

const AnimatedElement = ({ children, animation, delay = '0s' }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`animated-element ${animation} ${isIntersecting ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

const ContactPage = () => {
  const imageCards = [
    { img: 'https://placehold.co/400x300/EFEFEF/333?text=Team', title: 'TEAM' },
    { img: 'https://placehold.co/400x300/EFEFEF/333?text=Lab', title: 'SCIENCE LAB' },
    { img: 'https://placehold.co/400x300/EFEFEF/333?text=Classroom', title: 'CLASSROOM' },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <AnimatedElement animation="fade-in">
          <h1>Contact Us</h1>
        </AnimatedElement>
      </section>

      {/* Office Info + Map */}
      <section className="office-section container">
        <AnimatedElement animation="fade-in-up">
          <h2 className="section-title red decorative">Our Main Office</h2>
        </AnimatedElement>
        <div className="office-grid">
          <AnimatedElement animation="fade-in-up" delay="0.1s">
            <div className="office-details-box">
              <div className="office-image">
                <img
                  src="https://placehold.co/600x400/DDD/333?text=JPCHS+Reception"
                  alt="JPCHS Reception"
                />
              </div>
              <div className="main-office-details">
                <h3>JPCHS Campus, Hajipur</h3>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    Fatepur Chirimara Kajipur, P.O - Thathan Bujurge, P.S - Hajipur, Bihar - 844125
                  </span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <span>+91 98765 43211</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>contact@jpchs.in</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in-up" delay="0.2s">
            <div className="office-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.317543072187!2d85.2124524!3d25.6953634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed63b186c07b15%3A0x4a52dcfe5b79b847!2sHajipur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1690000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JPCHS Location"
              ></iframe>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Image Grid */}
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

      <ExpertTeam type="contact" />
      <CompaniesBanner />
    </div>
  );
};

export default ContactPage;
