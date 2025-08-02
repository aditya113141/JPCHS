// src/components/PlacementReviews.js
import React from 'react';
import './PlacementReviews.css';

const StarRating = () => (
  <div className="star-rating">
    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
  </div>
);

const Reviewer = ({ image, name, role }) => (
  <div className="reviewer-item">
    <img src={image} alt={name} className="reviewer-image" />
    <div className="reviewer-details">
      <p className="reviewer-name">{name}</p>
      <p className="reviewer-role">{role || 'Placed Student'}</p>
      <StarRating />
    </div>
  </div>
);

const PlacementReviews = () => {
  const reviewers = [
    { image: 'https://placehold.co/70x70/EFEFEF/333?text=AV', name: 'Anjali Verma', role: 'GNM Nurse – Apollo Hospital' },
    { image: 'https://placehold.co/70x70/EFEFEF/333?text=PS', name: 'Pankaj Sharma', role: 'Lab Technician – Surat' },
    { image: 'https://placehold.co/70x70/EFEFEF/333?text=NR', name: 'Neha Reddy', role: 'ANM Nurse – Qatar' },
    { image: 'https://placehold.co/70x70/EFEFEF/333?text=RD', name: 'Ravi Deshmukh', role: 'OT Technician – Ahmedabad' },
    { image: 'https://placehold.co/70x70/EFEFEF/333?text=KM', name: 'Kiran Mehta', role: 'Pharmacy Assistant – Max Healthcare' },
    { image: 'https://placehold.co/70x70/EFEFEF/333?text=BK', name: 'Bhavna Kumari', role: 'Radiology Assistant – Kuwait Hospital' },
    { image: 'https://placehold.co/70x70/EFEFEF/333?text=SS', name: 'Sunil Sharma', role: 'OT Technician – Cygnus Hospital' },
    { image: 'https://placehold.co/70x70/EFEFEF/333?text=RJ', name: 'Ritika Joshi', role: 'GNM Nurse – Dubai' },
  ];

  return (
    <section className="placement-reviews-section">
      <div className="container">
        <h2 className="section-title">Our Placement Stars</h2>
        <p className="placement-subtitle">Students of JPCHS shining across India & Abroad</p>
        <div className="reviewers-grid">
          {reviewers.map((r) => (
            <Reviewer key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementReviews;
