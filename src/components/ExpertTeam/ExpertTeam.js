// src/components/ExpertTeam/ExpertTeam.js (Final Version)
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './ExpertTeam.css';

// This is a reusable animation wrapper
const AnimatedElement = ({ children, animation, delay }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} style={{transitionDelay: delay}} className={`animated-element ${animation} ${isIntersecting ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

// The card component is now more flexible
const TeamMemberCard = ({ member, type }) => (
    <div className="team-card">
        <div className="team-image-container">
            <img src={member.img} alt={member.name} />
        </div>
        <div className="team-info">
            <h5>{member.name}</h5>
            <p className="team-title">{member.title}</p>
            {/* This part will only show on the About Us page */}
            {type === 'about' && (
                <>
                    <hr />
                    <p className="team-contact">CONTACT:-</p>
                    <p className="team-contact">{member.contact1}</p>
                    <p className="team-contact">{member.contact2}</p>
                </>
            )}
        </div>
    </div>
);

// The main component now accepts a "type" prop
const ExpertTeam = ({ type = 'contact' }) => { // 'contact' is the default
    const aboutTeam = [
        { img: 'https://placehold.co/400x400/EFEFEF/333?text=G.Mahender', name: 'G.MAHENDER', title: '', contact1: '74163 87602', contact2: '74163 87603' },
        { img: 'https://placehold.co/400x400/EFEFEF/333?text=G.Srivani', name: 'G.SRIVANI', title: '', contact1: '74163 87602', contact2: '74163 87603' },
        { img: 'https://placehold.co/400x400/EFEFEF/333?text=Fabien+Mailly', name: 'Fabien Mailly', title: '', contact1: '74163 87602', contact2: '74163 87603' },
    ];

    const contactTeam = [
        { img: 'https://placehold.co/400x400/EFEFEF/333?text=G.Mahender', name: 'G.MAHENDER', title: 'Principal' },
        { img: 'https://placehold.co/400x400/EFEFEF/333?text=G.Srivani', name: 'G.SRIVANI', title: 'Director' },
        { img: 'https://placehold.co/400x400/EFEFEF/333?text=Anupa+Jagan', name: 'Anupa Jagan', title: 'Operation Manager' },
    ];
    
    const teamData = type === 'about' ? aboutTeam : contactTeam;
    const sectionClassName = type === 'about' ? 'expert-team-section-about' : 'expert-team-section-contact';

    return (
        <section className={sectionClassName}>
            <div className="container">
                <AnimatedElement animation="fade-in-up">
                    <h2 className="section-title red decorative">Our Expert Team</h2>
                    <p className="expert-team-intro">
                        NOW A DAYS SOME PEOPLE ARE VERY INTERESTED IN HOTEL MANAGEMENT, BUT THEY ARE NOT GETTING RIGHT SOLUTION TO FIND PERFECT INSTITUTION...
                    </p>
                </AnimatedElement>
                <div className="team-grid">
                    {teamData.map((member, index) => (
                         <AnimatedElement key={index} animation="fade-in-up" delay={`${index * 0.1}s`}>
                            <TeamMemberCard member={member} type={type} />
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertTeam;
