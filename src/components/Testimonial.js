import React from 'react';
import './Testimonials.css';

const TestimonialCard = ({ text, name, role, image }) => (
  <div className="testimonial-card">
    <p className="testimonial-text">"{text}"</p>
    <div className="author-info">
      <img src={image} alt={name} className="author-image" />
      <div>
        <h4 className="author-name">{name}</h4>
        <p className="author-role">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const reviews = [
    { text: "Thanks to Reyansh College of Hotel Management, I landed a great job in Qatar! Their teachers and hands-on training prepared me perfectly for the hospitality industry. I'm so grateful for their support and guidance.", name: 'Vinay Vempally', role: 'BARTENDER', image: 'https://placehold.co/60x60/222/fff?text=VV' },
    { text: "Thanks to the support and training from Reyansh College of Hotel Management. Their hands-on approach and industry-focused education have prepared me well for this role. I owe it all to Reyansh College!", name: 'Rajesh kumar', role: 'POOL ATTENDER', image: 'https://placehold.co/60x60/444/fff?text=RK' },
    { text: "Reyansh College of Hotel Management, I've secured a rewarding housekeeping position. Their training and expert guidance have equipped me with the skills and knowledge necessary to excel in the hotel management industry.", name: 'Ravi Teja', role: 'HOUSE KEEPING', image: 'https://placehold.co/60x60/666/fff?text=RT' },
    { text: "Thanks to Reyansh College of Hotel Management, I'm grateful for their support and proud to represent Reyansh College in the thriving hospitality scene of Dubai!", name: 'Dinesh kumar', role: 'BARTENDER', image: 'https://placehold.co/60x60/888/fff?text=DK' },
  ];
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        <h3 className="section-subtitle">ABOUT "REYANSH COLLEGE OF HOTEL MANAGEMENT"</h3>
        <div className="testimonials-grid">
          {reviews.map(review => <TestimonialCard key={review.name} {...review} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;