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
    {
      text: "JPCHS helped me become a certified nurse. Today I work in a reputed hospital in Bangalore and support my family proudly.",
      name: 'Anjali Verma',
      role: 'GNM Nurse',
      image: 'https://placehold.co/60x60/222/fff?text=AV',
    },
    {
      text: "I had only completed 10th but JPCHS gave me the opportunity to become a lab technician. I'm now working in a diagnostic center in Gujarat.",
      name: 'Pankaj Sharma',
      role: 'DMLT Technician',
      image: 'https://placehold.co/60x60/444/fff?text=PS',
    },
    {
      text: "The training at JPCHS is very practical. With their support, I got placed in a hospital abroad. Thank you JPCHS!",
      name: 'Neha Reddy',
      role: 'ANM Nurse',
      image: 'https://placehold.co/60x60/666/fff?text=NR',
    },
    {
      text: "I joined JPCHS with no prior experience. Now, I work as an OT technician in a leading private hospital in Ahmedabad.",
      name: 'Ravi Deshmukh',
      role: 'OT Technician',
      image: 'https://placehold.co/60x60/888/fff?text=RD',
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <h3 className="section-subtitle">ABOUT JAI PRAKASH COLLEGE OF HEALTH SCIENCE</h3>
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
