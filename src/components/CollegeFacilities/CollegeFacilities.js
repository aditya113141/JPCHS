import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './CollegeFacilities.css';

const AnimatedElement = ({ children, animation, delay }) => {
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
        <h2 className="section-title">Our Facilities</h2>
        <div className="facilities-grid">
          <FacilityCard
            title="24x7 E-Learning Access"
            text="Our digital library and learning platform are available round the clock, helping students stay ahead with updated study material and research tools."
            delay="0s"
          />
          <FacilityCard
            title="Modern Classrooms & Labs"
            text="Our classrooms and labs are equipped with the latest medical and paramedical technology, ensuring students gain practical knowledge in real-time scenarios."
            delay="0.2s"
          />
          <FacilityCard
            title="Work-While-You-Study Program"
            text="Talented students have opportunities to assist in real campus operations, gaining hands-on experience and potential placement within our institution."
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default CollegeFacilities;
