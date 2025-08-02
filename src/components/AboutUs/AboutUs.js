import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './AboutUs.css';

import StatsBanner from '../StatsBanner/StatsBanner';
import CollegeFacilities from '../CollegeFacilities/CollegeFacilities';
import GetInTouch from '../GetInTouch/GetInTouch';
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

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Banner */}
      <div className="about-hero">
        <AnimatedElement animation="fade-in">
          <h1>About JPCHS</h1>
          <p>Affiliated to: Jawaharlal Nehru Technical Education (CSD), Govt. of India</p>
        </AnimatedElement>
      </div>

      {/* Speciality & Success */}
      <section className="about-intro-section container">
        <div className="about-intro-grid">
          <div className="about-intro-text">
            <AnimatedElement animation="fade-in-up">
              <h2 className="red-title">Our Specialities</h2>
              <p>
                At Jai Prakash College of Health Science (JPCHS), we focus on practical, career-oriented
                healthcare education. With modern labs, skilled faculty, and industry-driven training, we
                ensure every student is career-ready and confident to work in India or abroad.
              </p>
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
              <h2 className="red-title">Our Success Stories</h2>
              <p>
                Over the years, JPCHS has proudly placed hundreds of students across reputed hospitals and
                health facilities. Many of our alumni are currently working internationally in rewarding
                healthcare roles.
              </p>
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
      <ExpertTeam type="about" />
      <CompaniesBanner />
    </div>
  );
};

export default AboutUs;
