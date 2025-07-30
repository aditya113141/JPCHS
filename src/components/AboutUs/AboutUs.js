import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './AboutUs.css';

// Import all the section components
import StatsBanner from '../StatsBanner/StatsBanner';
import CollegeFacilities from '../CollegeFacilities/CollegeFacilities';
import GetInTouch from '../GetInTouch/GetInTouch';
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

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Section 1: Hero Banner */}
      <div className="about-hero">
        <AnimatedElement animation="fade-in">
          <h1>About Us</h1>
          <p>Affiliated To : Jawaharlal Nehru Technical Education-(CSD)Govt. Of India</p>
        </AnimatedElement>
      </div>

      {/* Section 2: Speciality & Success Stories */}
      <section className="about-intro-section container">
        <div className="about-intro-grid">
          <div className="about-intro-text">
            <AnimatedElement animation="fade-in-up">
              <h2 className="red-title">Reyansh College Speciality</h2>
              <p>At Reyansh College of Hotel Management, we are committed to providing comprehensive education and training in the field of hotel management...</p>
            </AnimatedElement>
          </div>
          <div className="about-intro-image">
            <AnimatedElement animation="slide-in-up">
                <img src="https://placehold.co/500x500/EFEFEF/333?text=Director" alt="Director" />
            </AnimatedElement>
          </div>
        </div>
        <div className="about-intro-grid reverse">
          <div className="about-intro-text">
            <AnimatedElement animation="fade-in-up">
              <h2 className="red-title">Success Stories</h2>
              <p>From the last six years we have successfully sent 2000 candidates to different countries...</p>
            </AnimatedElement>
          </div>
          <div className="about-intro-image">
             <AnimatedElement animation="slide-in-up">
                <img src="https://placehold.co/600x400/DDD/333?text=College" alt="College Building" />
            </AnimatedElement>
          </div>
        </div>
      </section>

      <StatsBanner />
      <CollegeFacilities />
      <GetInTouch />
      <ExpertTeam />
      <CompaniesBanner />
    </div>
  );
};

export default AboutUs;