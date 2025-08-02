// src/components/CoursesPage/CoursesPage.js  
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './CoursesPage.css';

const AnimatedElement = ({ children, animation, delay = '0s' }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref} style={{transitionDelay: delay}} className={`animated-element ${animation} ${isIntersecting ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

const CoursesPage = () => {
    const courses = [
        { img: 'https://placehold.co/400x300/EAD9FF/333?text=Diploma', title: 'DIPLOMA IN MEDICAL LAB TECHNOLOGY', description: 'Gain hands-on skills in laboratory techniques, diagnostics, and analysis essential to support the healthcare system.' },
        { img: 'https://placehold.co/400x300/D9F1FF/333?text=Adv+Diploma', title: 'DIPLOMA IN OPERATION THEATER TECHNOLOGY', description: 'Train to assist during surgeries with in-depth knowledge of sterilization, surgical instruments, and OT procedures.' },
        { img: 'https://placehold.co/400x300/FFEAD9/333?text=PG+Diploma', title: 'DIPLOMA IN RADIOLOGY & IMAGING TECHNOLOGY', description: 'Master radiographic techniques and medical imaging for diagnostic and therapeutic purposes.' },
        { img: 'https://placehold.co/400x300/D9FFDB/333?text=Pharmacy', title: 'DIPLOMA IN PHARMACY', description: 'Explore pharmaceutical sciences and prepare for a rewarding career in the drug and healthcare industry.' },
    ];

    const placements = [
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Priya', name: 'Priya Sharma', role: 'Lab Technician at Apollo Hospitals' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Rohit', name: 'Rohit Patel', role: 'X-ray Technician at Sterling Hospital' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Neha', name: 'Neha Verma', role: 'Pharmacy Assistant at Zydus Cadila' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Arjun', name: 'Arjun Singh', role: 'OT Technician at Shalby Hospitals' },
    ];

    return (
        <div className="courses-page">
            <section className="courses-hero-new">
                <AnimatedElement animation="fade-in">
                    <h1>CAREERS IN HEALTH SCIENCE</h1>
                </AnimatedElement>
            </section>

            <section className="specializing-section container">
                <div className="specializing-grid">
                    <AnimatedElement animation="fade-in-up" className="specializing-text">
                        <h2>Healthcare Career Foundation at JPCHS</h2>
                        <p>At Jai Prakash College of Health Science (JPCHS), we specialize in offering hands-on, industry-relevant healthcare training to help students launch careers in diagnostics, imaging, surgery assistance, and pharmacy. Our courses are designed with practical application and global healthcare standards in mind.</p>
                    </AnimatedElement>
                    <AnimatedElement animation="slide-in-right" className="specializing-image">
                        <img src="https://placehold.co/600x400/DDD/333?text=JPCHS+Campus" alt="JPCHS College Building" />
                    </AnimatedElement>
                </div>
            </section>

            <section className="courses-offered-parallax">
                <div className="courses-offered-content container">
                    <AnimatedElement animation="fade-in-up">
                        <h3 className="courses-subtitle">JPCHS</h3>
                        <h2 className="courses-title-main">COURSES OFFERED</h2>
                    </AnimatedElement>
                    <div className="courses-offered-grid">
                        {courses.map((course, index) => (
                            <AnimatedElement key={index} animation="fade-in-up" delay={`${index * 0.1}s`}>
                                <div className="course-offer-card">
                                    <img src={course.img} alt={course.title} className="course-offer-image" />
                                    <div className="course-offer-text">
                                        <h4>{course.title}</h4>
                                        <p>{course.description}</p>
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            <section className="placements-section-courses container">
                 <AnimatedElement animation="fade-in-up">
                    <h2 className="section-title red">PLACEMENTS</h2>
                    <p className="placements-subtitle">Our graduates are placed in leading hospitals and labs across India, proving the strength of our practical training approach.</p>
                    <div className="placements-grid-courses">
                        {placements.map((person, index) => (
                            <div key={index} className="placement-card">
                                <img src={person.img} alt={person.name} />
                                <h5>{person.name}</h5>
                                <p>{person.role}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedElement>
            </section>

            <section className="courses-cta-new">
                <div className="container">
                    <AnimatedElement animation="fade-in-up">
                        <a href="#" className="cta-button-new">Contact Us on WhatsApp</a>
                    </AnimatedElement>
                </div>
            </section>
        </div>
    );
};

export default CoursesPage;
