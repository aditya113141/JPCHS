import React from 'react';
import './Courses.css';

const CourseCard = ({ image, title, description }) => (
  <div className="course-card">
    <img src={image} alt={title} className="course-image" />
    <div className="course-content">
      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>
    </div>
  </div>
);

const Courses = () => {
  const courseData = [
    { image: 'https://placehold.co/400x300/EAD9FF/333?text=Diploma', title: 'DIPLOMA', description: 'Our dynamic diploma program, equipping you with essential skills...' },
    { image: 'https://placehold.co/400x300/D9F1FF/333?text=Adv+Diploma', title: 'ADVANCE DIPLOMA', description: 'Master hotel operations and guest services with our specialized...' },
    { image: 'https://placehold.co/400x300/FFEAD9/333?text=PG+Diploma', title: 'PG DIPLOMA', description: 'Elevate your expertise with our advanced PG Diploma in Hotel...' },
    { image: 'https://placehold.co/400x300/D9FFDB/333?text=Bartending', title: 'DIPLOMA BARTENDING', description: 'Raise the bar on your career prospects with our accredited Diploma...' },
  ];
  return (
    <section className="courses-section">
      <div className="container">
        <h3 className="section-subtitle" style={{ color: '#555' }}>REYansh COLLEGE</h3>
        <h2 className="section-title">HOTEL MANAGEMENT COURSES</h2>
        <p className="courses-intro">
          NO NEED TO WORRY ABOUT YOUR QUALIFICATION NO NEED TO PASS IN 10TH, INTER & DEGREE. WHATEVER IT MAY BE. 100S OF OUR STUDENTS ALREADY IN THEIR RESPECTIVE JOBS IN HIGHLY DEMANDED SALARIES AND HOTEL'S IN ABROAD COUNTRIES. 100% JOB PLACEMENT'S IN ALL OVER INDIA & ABROAD.
        </p>
        <div className="courses-grid">
          {courseData.map(course => <CourseCard key={course.title} {...course} />)}
        </div>
      </div>
    </section>
  );
};

export default Courses;