import React from 'react';
import './Campuses.css';

const CampusCard = ({ image, buttonText }) => (
  <div className="campus-card">
    <img src={image} alt="Campus" />
    {buttonText && <a href="#" className="campus-button">{buttonText}</a>}
  </div>
);

const Campuses = () => {
  return (
    <section className="campus-section">
      <div className="container">
        <h2 className="section-title">OUR CAMPUSES</h2>
        <p className="campus-intro">
          HELLO MY DEAR STUDENT'S AND WELL WISHERS<br />
          THIS IS GADDAM MAHENOHAR, NOW A DAYS SOME PEOPLE ARE VERY INTERESTED IN HOTEL MANAGEMENT, BUT THEY ARE NOT GETTING RIGHT SOLUTION TO FIND PERFECT INSTITUTION. THAT'S WHY WE ARE GOING TO INTRODUCING A NEW COLLEGE " REYANSH COLLEGE OF HOTEL MANAGEMENT "IN NIZAMABAD.
        </p>
        <div className="campus-grid">
          <CampusCard image="https://placehold.co/600x400/FFDDC1/333?text=Campus+1" />
          <CampusCard image="https://placehold.co/600x400/C1D4FF/333?text=Campus+2" buttonText="KNOW MORE" />
          <CampusCard image="https://placehold.co/600x400/D1C1FF/333?text=Campus+3" />
        </div>
        <div className="campus-grid second-row">
          <CampusCard image="https://placehold.co/600x400/FFC1C1/333?text=Campus+4" />
          <CampusCard image="https://placehold.co/600x400/C1FFE6/333?text=Campus+5" />
          <CampusCard image="https://placehold.co/600x400/FFF5C1/333?text=Campus+6" buttonText="KNOW MORE" />
        </div>
      </div>
    </section>
  );
};

export default Campuses;