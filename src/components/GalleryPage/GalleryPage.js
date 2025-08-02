// src/components/GalleryPage/GalleryPage.js
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './GalleryPage.css';

const AnimatedElement = ({ children, animation, delay = '0s' }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} style={{ transitionDelay: delay }} className={`animated-element ${animation} ${isIntersecting ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

const GalleryPage = () => {
    const eventImages = Array(9).fill('https://placehold.co/400x300/ddd/333?text=JPCHS+Event');
    const trainingImages = Array(18).fill('https://placehold.co/400x300/ccc/333?text=Medical+Training');
    const teamImages = [
        { img: 'https://placehold.co/300x300/eee/333?text=Team+1', name: 'Dr. Seema Rathi', title: 'Principal' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+2', name: 'Mr. Sanjay Kumar', title: 'Head of Radiology' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+3', name: 'Mrs. Rupal Mehta', title: 'Pharmacy Department' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+4', name: 'Dr. Vikram Patel', title: 'Operation Theatre Trainer' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+5', name: 'Ms. Bhavna Shah', title: 'Lab Tech Instructor' },
        { img: 'https://placehold.co/300x300/eee/333?text=Team+6', name: 'Mr. Suresh Iyer', title: 'Placement Officer' },
    ];
    const testimonials = Array(12).fill({ type: 'video' });

    return (
        <div className="gallery-page">
            <section className="gallery-hero">
                <AnimatedElement animation="fade-in">
                    <h1>Gallery</h1>
                </AnimatedElement>
            </section>

            <section className="why-reyansh-section container">
                <div className="why-reyansh-grid">
                    <AnimatedElement animation="fade-in-up" className="why-reyansh-text">
                        <h2>Why Jai Prakash College of Health Science?</h2>
                        <ul>
                            <li>Expert-Led Education: Learn from qualified professionals with real-world experience in medical and healthcare fields.</li>
                            <li>State-of-the-Art Labs: Access modern diagnostic and training facilities for enhanced practical learning.</li>
                            <li>Placement Support: Benefit from our strong placement network with top hospitals and labs in India.</li>
                            <li>Career-Ready Skills: Get trained in real clinical procedures, ensuring you're job-ready from day one.</li>
                        </ul>
                        <a href="#" className="cta-button-red">WHATSAPP US FOR MORE INFO &gt;</a>
                    </AnimatedElement>
                    <div className="why-reyansh-image-wrapper">
                        <AnimatedElement animation="slide-in-up">
                            <div className="image-container">
                                <img src="https://placehold.co/500x600/ddd/333?text=JPCHS+Students" alt="JPCHS Students" />
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            <section className="khali-section container">
                <AnimatedElement animation="fade-in-up">
                    <h3 className="section-pre-title">[ CAMPUS EVENTS ]</h3>
                    <h2 className="section-title-large">CULTURAL & ACADEMIC MOMENTS</h2>
                    <p className="section-description">Snapshots from our orientation events, seminars, cultural days, and more at JPCHS.</p>
                </AnimatedElement>
                <div className="image-grid-nine">
                    {eventImages.map((img, index) => (
                        <AnimatedElement key={index} animation="fade-in-up" delay={`${(index % 3) * 0.1}s`}>
                            <img src={img} alt={`JPCHS Event ${index + 1}`} />
                        </AnimatedElement>
                    ))}
                </div>
            </section>

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

            <section className="our-team-section container">
                <AnimatedElement animation="fade-in-up">
                    <h2 className="section-title-center">OUR FACULTY & TEAM</h2>
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

            <section className="testimonials-gallery-section container">
                <AnimatedElement animation="fade-in-up">
                    <h2 className="section-title-center">Student Testimonials</h2>
                    <p className="section-description">Discover real experiences from JPCHS students about how our programs have helped them grow and succeed in the healthcare industry.</p>
                </AnimatedElement>
                <div className="testimonials-grid-gallery">
                    {testimonials.map((item, index) => (
                        <AnimatedElement key={index} animation="fade-in-up" delay={`${(index % 3) * 0.1}s`}>
                            <div className="testimonial-item">
                                <img src={`https://placehold.co/400x300/bbb/333?text=Testimonial+${index + 1}`} alt={`Testimonial ${index + 1}`} />
                                {(index > 5 && index < 9) && <div className="play-icon">▶</div>}
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </section>

            <section className="final-cta-section">
                <div className="container">
                    <AnimatedElement animation="fade-in-up">
                        <h2>Jai Prakash College Of Health Science</h2>
                        <p>Empowering the Next Generation of Healthcare Professionals</p>
                        <a href="#" className="cta-button-red">GET IN TOUCH WITH US &gt;</a>
                    </AnimatedElement>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
