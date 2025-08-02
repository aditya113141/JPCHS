import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './ExpertTeam.css';

const AnimatedElement = ({ children, animation, delay }) => {
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

const TeamMemberCard = ({ member, type }) => (
  <div className="team-card">
    <div className="team-image-container">
      <img src={member.img} alt={member.name} />
    </div>
    <div className="team-info">
      <h5>{member.name}</h5>
      <p className="team-title">{member.title}</p>
      {type === 'about' && (
        <>
          <hr />
          <p className="team-contact">Contact:</p>
          <p className="team-contact">{member.contact1}</p>
          <p className="team-contact">{member.contact2}</p>
        </>
      )}
    </div>
  </div>
);

const ExpertTeam = ({ type = 'contact' }) => {
  const aboutTeam = [
    {
      img: 'https://placehold.co/400x400/EFEFEF/333?text=Dr.+Mahender',
      name: 'Dr. Mahender Kumar',
      title: 'Chairman',
      contact1: '+91 9876543210',
      contact2: '+91 9876543211',
    },
    {
      img: 'https://placehold.co/400x400/EFEFEF/333?text=Dr.+Srivani',
      name: 'Dr. Srivani Kumari',
      title: 'Director',
      contact1: '+91 9876543210',
      contact2: '+91 9876543211',
    },
    {
      img: 'https://placehold.co/400x400/EFEFEF/333?text=Fabien',
      name: 'Fabien Mailly',
      title: 'International Advisor',
      contact1: '+91 9876543210',
      contact2: '+91 9876543211',
    },
  ];

  const contactTeam = [
    {
      img: 'https://placehold.co/400x400/EFEFEF/333?text=Dr.+Mahender',
      name: 'Dr. Mahender Kumar',
      title: 'Chairman',
    },
    {
      img: 'https://placehold.co/400x400/EFEFEF/333?text=Dr.+Srivani',
      name: 'Dr. Srivani Kumari',
      title: 'Director',
    },
    {
      img: 'https://placehold.co/400x400/EFEFEF/333?text=Anupa',
      name: 'Anupa Jagan',
      title: 'Operations Manager',
    },
  ];

  const teamData = type === 'about' ? aboutTeam : contactTeam;
  const sectionClass = type === 'about' ? 'expert-team-section-about' : 'expert-team-section-contact';

  return (
    <section className={sectionClass}>
      <div className="container">
        <AnimatedElement animation="fade-in-up">
          <h2 className="section-title red decorative">Our Expert Team</h2>
          <p className="expert-team-intro">
            Our dedicated team of educators and professionals is committed to providing the best education and guidance to future healthcare leaders.
          </p>
        </AnimatedElement>

        <div className="team-grid">
          {teamData.map((member, i) => (
            <AnimatedElement key={i} animation="fade-in-up" delay={`${i * 0.1}s`}>
              <TeamMemberCard member={member} type={type} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
