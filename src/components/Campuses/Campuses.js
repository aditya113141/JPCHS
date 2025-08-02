import React from 'react';
import './Campuses.css';

const CampusCard = ({ image, buttonText }) => (
  <div className="campus-card">
    <img src={image} alt="JPCHS Campus" />
    {buttonText && <a href="#" className="campus-button">{buttonText}</a>}
  </div>
);

const Campuses = () => {
  return (
    <section className="campus-section">
      <div className="container">
        <h2 className="section-title">Our Campuses</h2>
        <p className="campus-intro">
          Jai Prakash College Of Health Science is expanding its presence to make quality paramedical education accessible to students across regions. Our campuses are equipped with modern labs, experienced faculty, and hospital tie-ups to ensure hands-on learning and real-world exposure.
        </p>
        <div className="campus-grid">
          <CampusCard image="https://placehold.co/600x400/FFDDC1/333?text=CampusPic+1" />
          <CampusCard image="https://placehold.co/600x400/C1D4FF/333?text=CampusPic+2" buttonText="KNOW MORE" />
          <CampusCard image="https://placehold.co/600x400/D1C1FF/333?text=CampusPic+3" />
        </div>
        <div className="campus-grid second-row">
          <CampusCard image="https://placehold.co/600x400/FFC1C1/333?text=CampusPic+4" />
          <CampusCard image="https://placehold.co/600x400/C1FFE6/333?text=CampusPic+5" />
          <CampusCard image="https://placehold.co/600x400/FFF5C1/333?text=CampusPic+6" buttonText="KNOW MORE" />
        </div>
      </div>
    </section>
  );
};

export default Campuses;
