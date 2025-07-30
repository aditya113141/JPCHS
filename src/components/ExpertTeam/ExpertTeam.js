import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './ExpertTeam.css';

const AnimatedElement = ({ children, animation, delay }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} style={{transitionDelay: delay}} className={`animated-element ${animation} ${isIntersecting ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

const TeamMemberCard = ({ image, name, title, delay }) => (
    <AnimatedElement animation="fade-in-up" delay={delay}>
        <div className="team-member-card">
            <img src={image} alt={name} />
            <div className="member-info">
                <h5>{name}</h5>
                <p>{title}</p>
            </div>
        </div>
    </AnimatedElement>
);

const ExpertTeam = () => {
    return (
        <section className="expert-team-section">
            <div className="container">
                <h2 className="section-title">Contact Our Expert Team</h2>
                <div className="team-grid">
                    <TeamMemberCard 
                        image="https://placehold.co/400x400/EFEFEF/333?text=Gaddam" 
                        name="Gaddam Mahendhar" 
                        title="Founder"
                        delay="0s"
                    />
                    <TeamMemberCard 
                        image="https://placehold.co/400x400/EFEFEF/333?text=Sushma" 
                        name="Sushma" 
                        title="Co-Founder"
                        delay="0.2s"
                    />
                    <TeamMemberCard 
                        image="https://placehold.co/400x400/EFEFEF/333?text=Vaishali" 
                        name="Vaishali" 
                        title="Marketing Head"
                        delay="0.4s"
                    />
                </div>
            </div>
        </section>
    );
};

export default ExpertTeam; // <-- Make sure this line exists