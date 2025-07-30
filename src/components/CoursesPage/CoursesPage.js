// src/components/CoursesPage/CoursesPage.js (Corrected)
import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './CoursesPage.css';

// Reusable animation wrapper
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
        { img: 'https://placehold.co/400x300/EAD9FF/333?text=Diploma', title: 'DIPLOMA', description: 'hotel management success with our dynamic diploma program, equipping you with essential skills for thriving in the hospitality industry.' },
        { img: 'https://placehold.co/400x300/D9F1FF/333?text=Adv+Diploma', title: 'ADVANCE DIPLOMA', description: 'Master hotel operations and guest services with our specialized diploma program. Launch your career in hotel management diploma.' },
        { img: 'https://placehold.co/400x300/FFEAD9/333?text=PG+Diploma', title: 'PG DIPLOMA', description: 'Unlock executive opportunities in Golf Countries with our comprehensive PG Diploma in Hotel Management.' },
        { img: 'https://placehold.co/400x300/D9FFDB/333?text=Bartending', title: 'DIPLOMA BARTENDING', description: 'Enroll In Our Diploma In Bartending Program Today. Raise The Bar On Your Career Prospects With Our Accredited Diploma In Bartending.' },
    ];

    const placements = [
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Suresh', name: 'Suresh Kumar', role: 'Marriott Resorts Maldives' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Raviteja', name: 'Raviteja', role: 'Housekeeping' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Rantna', name: 'Rantna Kumar', role: 'Park Regis UAE' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Ravindher', name: 'Ravindher Dhumala', role: 'Aquamarine Hotel & Resort Kuwait' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Ravi', name: 'Ravi Bussa', role: 'Safari Fintas Hotels Kuwait' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Mutha', name: 'Mutha Rahul', role: 'Embassy Suites by Hilton' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Lokesh', name: 'Lokesh Gaddam', role: 'Honduhali Island Maldives' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Limbadri', name: 'Limbadri Vadalkonda', role: 'Waiter Cyprus' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Manohar', name: 'Manohar', role: 'Rotana Hotel Kuwait' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Madhan', name: 'Madhan Kodu', role: 'Bartender Maldives' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Riya', name: 'Riya Abdul', role: 'Pool Attendant Abu Dhabi' },
        { img: 'https://placehold.co/200x250/EFEFEF/333?text=Madhukar', name: 'Madhukar Reddy', role: 'Castello Hotel Bartender' },
    ];

    return (
        <div className="courses-page">
            {/* Section 1: Hero */}
            <section className="courses-hero-new">
                <AnimatedElement animation="fade-in">
                    <h1>INTERNATIONAL JOBS OPPORTUNITIES</h1>
                </AnimatedElement>
            </section>

            {/* Section 2: Specializing */}
            <section className="specializing-section container">
                <div className="specializing-grid">
                    <AnimatedElement animation="fade-in-up" className="specializing-text">
                        <h2>Specializing in Hotel Management at Reyansh College</h2>
                        <p>At Reyansh College of Hotel Management, our specialty lies in providing comprehensive education and training in the field of hotel management. With a focus on excellence, innovation, and industry relevance, we prepare our students to excel in the dynamic and competitive hospitality industry.</p>
                    </AnimatedElement>
                    <AnimatedElement animation="slide-in-right" className="specializing-image">
                        <img src="https://placehold.co/600x400/DDD/333?text=College" alt="Reyansh College Building" />
                    </AnimatedElement>
                </div>
            </section>
            
            {/* Section 3: Courses Offered with Parallax Background */}
            <section className="courses-offered-parallax">
                <div className="courses-offered-content container">
                    <AnimatedElement animation="fade-in-up">
                        <h3 className="courses-subtitle">RCHM</h3>
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
            
            {/* Section 4: Placements */}
            <section className="placements-section-courses container">
                 <AnimatedElement animation="fade-in-up">
                    <h2 className="section-title red">PLACEMENTS</h2>
                    <p className="placements-subtitle">"Students Who Have Successfully Landed Job Placements Following Their Training At Our College."</p>
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

            {/* Section 5: CTA */}
            <section className="courses-cta-new">
                <div className="container">
                    <AnimatedElement animation="fade-in-up">
                        <a href="#" className="cta-button-new">Whatsapp Us For More</a>
                    </AnimatedElement>
                </div>
            </section>
        </div>
    );
};

export default CoursesPage;
