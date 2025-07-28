import React from 'react';
import './WhyJoinUs.css';

const Card = ({ icon, title, text }) => (
  <div className="why-join-card">
    <img src={icon} alt="" className="card-icon" />
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{text}</p>
  </div>
);

const WhyJoinUs = () => {
  const features = [
    { icon: 'https://placehold.co/80x80/FEF2E5/E4994A?text=💼', title: 'Wide Employment Opportunity', text: '8.1 Crore Jobs in India\'s Tourism Sector' },
    { icon: 'https://placehold.co/80x80/E5F7F3/4AC8A8?text=🛠️', title: 'Skills Development', text: 'No Need to Memorize. Skill oriented Courses.' },
    { icon: 'https://placehold.co/80x80/E5F1FC/4A8EE4?text=🌍', title: 'Work across the Globe', text: 'Opportunity to Work in any country across the world' },
    { icon: 'https://placehold.co/80x80/FCE5E5/E44A4A?text=🤝', title: 'Diverse Industry Placements', text: 'Can work in Star Hotels, Luxury Resorts, Airlines, Cruise ships...' },
    { icon: 'https://placehold.co/80x80/E8E5FC/6C4AE4?text=🚀', title: 'Quick Growth in Career', text: 'Creative work-style with quick growth to Top Management...' },
    { icon: 'https://placehold.co/80x80/FCF8E5/E4D04A?text=💡', title: 'Multicultural Exposure', text: 'Opportunity to Meet and interact with Celebrities...' },
  ];

  return (
    <section className="why-join-us">
      <div className="container">
        <h3 className="section-subtitle">WELCOME TO RCHM</h3>
        <h2 className="section-title">Why to Join Us</h2>
        <div className="cards-grid">
          {features.map(feature => <Card key={feature.title} {...feature} />)}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;