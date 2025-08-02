import React from 'react';
import './WhyJoinUs.css';

const Card = ({ icon, title, text }) => (
  <div className="why-join-card">
    <div className="card-icon-text">{icon}</div>
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{text}</p>
  </div>
);

const WhyJoinUs = () => {
  const features = [
    {
      icon: '🏥',
      title: 'Booming Healthcare Industry',
      text: 'India needs 2.4 million doctors and over 5 million nurses by 2030.',
    },
    {
      icon: '📚',
      title: 'Hands-on Skill Training',
      text: 'Focus on practical learning through labs, simulations, and clinical training.',
    },
    {
      icon: '🌎',
      title: 'Global Career Scope',
      text: 'Healthcare professionals are in demand across the world.',
    },
    {
      icon: '🩺',
      title: 'Multi-Sector Jobs',
      text: 'Hospitals, clinics, diagnostics, home healthcare, public health & more.',
    },
    {
      icon: '🚀',
      title: 'Fast-Track Career Growth',
      text: 'With dedication, grow from trainee to head of department in just a few years.',
    },
    {
      icon: '🌐',
      title: 'Diverse Exposure',
      text: 'Work with patients, doctors, NGOs, and government health programs.',
    },
  ];

  return (
    <section className="why-join-us">
      <div className="container">
        <h3 className="section-subtitle">WELCOME TO JPCHS</h3>
        <h2 className="section-title">Why Choose Jai Prakash College Of Health Science</h2>
        <div className="cards-grid">
          {features.map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
