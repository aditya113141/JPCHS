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
            <p className="reviewer-role">{role}</p>
            <StarRating />
        </div>
    </div>
);

const PlacementReviews = () => {
    const reviewers = [
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'MADHAN KODU', role: 'Bartender' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Riya Abdul', role: 'Pool Attender' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Mallikarjuna', role: 'Bartender' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Raviteja', role: 'House Keeping' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Mutha Rahul', role: 'Bartender' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Madhukar', role: 'Bartender' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Nagarjuna', role: 'Bartender' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Dinesh', role: 'Bartender' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Rantna Kumar', role: 'Park Regis Uae' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Manohar', role: 'Rotana Hotel Kuwait' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Ravindher Dhumala', role: 'Resort kuwait' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Lokesh Gaddam', role: '' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Limbadri Vadalkonda', role: 'Waiter Cyprus' },
        { image: 'https://placehold.co/70x70/EFEFEF/333?text=Man', name: 'Ravi Bussa', role: 'Safari Hotels Kuwait (KST)' },
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
