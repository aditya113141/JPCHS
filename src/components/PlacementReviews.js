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
      <p className="reviewer-role">{role}</p>
      <StarRating />
    </div>
  </div>
);

const PlacementReviews = () => {
  const reviewers = [
    { image: 'https://placehold.co/60x60/333/fff?text=MK', name: 'MADHAN KODU', role: 'Bartender' },
    { image: 'https://placehold.co/60x60/333/fff?text=RA', name: 'Riya Abdul', role: 'Pool Attender' },
    { image: 'https://placehold.co/60x60/333/fff?text=M', name: 'Mallikarjuna', role: 'Bartender' },
    { image: 'https://placehold.co/60x60/333/fff?text=R', name: 'Raviteja', role: 'House Keeping' },
    { image: 'https://placehold.co/60x60/333/fff?text=MR', name: 'Mutha Rahul', role: 'Bartender' },
    { image: 'https://placehold.co/60x60/333/fff?text=M', name: 'Madhukar', role: 'Bartender' },
    { image: 'https://placehold.co/60x60/333/fff?text=N', name: 'Nagarjuna', role: 'Bartender' },
    { image: 'https://placehold.co/60x60/333/fff?text=D', name: 'Dinesh', role: 'Bartender' },
    { image: 'https://placehold.co/60x60/333/fff?text=RK', name: 'Ramana Kumar', role: 'Park Regis Uae' },
    { image: 'https://placehold.co/60x60/333/fff?text=M', name: 'Manohar', role: 'Rotana Hotel Kuwait' },
  ];
  return (
    <section className="placement-reviews-section">
      <div className="container">
        <h2 className="section-title">OUR PLACEMENT TEAM REVIEWS</h2>
        <div className="reviewers-grid">
          {reviewers.map(r => <Reviewer key={r.name} {...r} />)}
        </div>
      </div>
    </section>
  );
};

export default PlacementReviews;