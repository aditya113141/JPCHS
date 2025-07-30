import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './CollegeFacilities.css';

const AnimatedElement = ({ children, animation, delay }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} style={{transitionDelay: delay}} className={`animated-element ${animation} ${isIntersecting ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

const FacilityCard = ({ title, text, delay }) => (
    <AnimatedElement animation="fade-in-up" delay={delay}>
        <div className="facility-card">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </AnimatedElement>
);

const CollegeFacilities = () => {
    return (
        <section className="facilities-section">
            <div className="container">
                <h2 className="section-title">Our College Facilities</h2>
                <div className="facilities-grid">
                    <FacilityCard 
                        title="24x7 E-LEARNING" 
                        text="Our digital library is accessible anytime, anywhere, providing students with a wealth of resources for their studies and research."
                        delay="0s"
                    />
                    <FacilityCard 
                        title="BEST CLASS ROOMS LABS WITH LATEST AMENITIES" 
                        text="We boast modern classrooms and fully-equipped labs with the latest technology to facilitate an interactive and effective learning experience."
                        delay="0.2s"
                    />
                    <FacilityCard 
                        title="A CHANCE FOR OUR TRAINEES TO WORK WITH US" 
                        text="We believe in our talent. Exceptional trainees get the opportunity to join the Reyansh College team, turning their internship into a career."
                        delay="0.4s"
                    />
                </div>
            </div>
        </section>
    );
};

export default CollegeFacilities;