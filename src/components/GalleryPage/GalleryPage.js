// src/components/GalleryPage/GalleryPage.js
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './GalleryPage.css';

// Reusable animation wrapper
const AnimatedElement = ({ children, animation, delay = '0s' }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} style={{transitionDelay: delay}} className={`animated-element ${animation} ${isIntersecting ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

const GalleryPage = () => {
    // Placeholder data for the image grids
    const khaliImages = Array(9).fill('https://placehold.co/400x300/ddd/333?text=Event');
    const trainingImages = Array(18).fill('https://placehold.co/400x300/ccc/333?text=Training');
    const teamImages = [
        { img: 'https://placehold.co/300x300/eee/333?text=Team+1', name: 'John Doe', title: 'Director' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+2', name: 'Jane Smith', title: 'Head Chef' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+3', name: 'Peter Jones', title: 'F&B Manager' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+4', name: 'Mary Williams', title: 'HR Manager' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+5', name: 'David Brown', title: 'Admissions Head' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+6', name: 'Susan Davis', title: 'Lead Instructor' },
    ];
    const testimonials = Array(12).fill({ type: 'video' }); // Mix of video and image placeholders

    return (
        <div className="gallery-page">
            {/* Section 1: Hero */}
            <section className="gallery-hero">
                <AnimatedElement animation="fade-in">
                    <h1>Candidates</h1>
                </AnimatedElement>
            </section>

            {/* Section 2: Why Reyansh */}
            <section className="why-reyansh-section container">
                <div className="why-reyansh-grid">
                    <AnimatedElement animation="fade-in-up" className="why-reyansh-text">
                        <h2>Why Reyansh College of Hotel Management?</h2>
                        <ul>
                            <li>Elite Education: Receive top-notch education in hospitality management, crafted to perfection by industry experts and academic professionals.</li>
                            <li>Unmatched Experience: Immerse yourself in a dynamic learning environment designed to foster creativity, innovation, and hands-on experience.</li>
                            <li>Global Perspective: Gain insights who embodies the spirit of resilience, dedication, and global success.</li>
                            <li>Career Advancement: Elevate your career prospects with our comprehensive programs and industry connections, paving the way for a bright future in the world of hospitality.</li>
                        </ul>
                        <a href="#" className="cta-button-red">WHATSAPP US FOR MORE INFO &gt;</a>
                    </AnimatedElement>
                    <div className="why-reyansh-image-wrapper">
                        <AnimatedElement animation="slide-in-up">
                            <div className="image-container">
                                <img src="https://placehold.co/500x600/ddd/333?text=Students" alt="Reyansh College Students" />
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* Section 3: The Great Khali */}
            <section className="khali-section container">
                <AnimatedElement animation="fade-in-up">
                    <h3 className="section-pre-title">[ WE ARE OPENING WITH ]</h3>
                    <h2 className="section-title-large">THE GREAT KHALI</h2>
                    <p className="section-description">Great Opening Reyansh College Of Hotel Management With WWE Indian Super Star The Great Khali</p>
                </AnimatedElement>
                <div className="image-grid-nine">
                    {khaliImages.map((img, index) => (
                        <AnimatedElement key={index} animation="fade-in-up" delay={`${(index % 3) * 0.1}s`}>
                            <img src={img} alt={`Event with The Great Khali ${index + 1}`} />
                        </AnimatedElement>
                    ))}
                </div>
            </section>

            {/* Section 4: Training Pictures */}
            <section className="training-section container">
                <AnimatedElement animation="fade-in-up">
                    <h2 className="section-title-center">OUR TRAINING PICTURES</h2>
                </AnimatedElement>
                <div className="image-grid-training">
                     {trainingImages.map((img, index) => (
                        <AnimatedElement key={index} animation="fade-in-up" delay={`${(index % 3) * 0.1}s`}>
                            <img src={img} alt={`Training picture ${index + 1}`} />
                        </AnimatedElement>
                    ))}
                </div>
            </section>

            {/* Section 5: Our Team */}
            <section className="our-team-section container">
                 <AnimatedElement animation="fade-in-up">
                    <h2 className="section-title-center">OUR TEAM</h2>
                </AnimatedElement>
                <div className="team-grid">
                    {teamImages.map((member, index) => (
                         <AnimatedElement key={index} animation="fade-in-up" delay={`${(index % 3) * 0.1}s`}>
                            <div className="team-card">
                                <img src={member.img} alt={member.name} />
                                <h5>{member.name}</h5>
                                <p>{member.title}</p>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
                <AnimatedElement animation="fade-in-up">
                    <a href="#" className="cta-button-red centered">CONTACT US</a>
                </AnimatedElement>
            </section>

            {/* Section 6: Testimonials */}
            <section className="testimonials-gallery-section container">
                <AnimatedElement animation="fade-in-up">
                    <h2 className="section-title-center">Our Students Testimonials</h2>
                    <p className="section-description">Genuine Experiences And Success Stories Of Students At Reyansh College Of Hotel Management Through Our Compelling Testimonials. Hear Directly From Our Students About Their Transformative Journeys And The Exceptional Education They Receive At Our Institution.</p>
                </AnimatedElement>
                <div className="testimonials-grid-gallery">
                    {testimonials.map((item, index) => (
                        <AnimatedElement key={index} animation="fade-in-up" delay={`${(index % 3) * 0.1}s`}>
                            <div className="testimonial-item">
                                <img src={`https://placehold.co/400x300/bbb/333?text=Testimonial+${index+1}`} alt={`Testimonial ${index + 1}`} />
                                { (index > 5 && index < 9) && <div className="play-icon">▶</div> }
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </section>
            
            {/* Section 7: Final CTA */}
            <section className="final-cta-section">
                <div className="container">
                    <AnimatedElement animation="fade-in-up">
                        <h2>Reyansh College Of Hotel Management</h2>
                        <p>Your Career Is Our First Priorty</p>
                        <a href="#" className="cta-button-red">GET IN TOUCH WITH US &gt;</a>
                    </AnimatedElement>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
