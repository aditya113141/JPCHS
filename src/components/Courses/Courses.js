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
    {
      image: 'https://placehold.co/400x300/EAD9FF/333?text=GNM',
      title: 'GNM (General Nursing & Midwifery)',
      description: 'Become a qualified nurse and midwife with real clinical training and nationwide demand.',
    },
    {
      image: 'https://placehold.co/400x300/D9F1FF/333?text=ANM',
      title: 'ANM (Auxiliary Nurse & Midwife)',
      description: 'Kickstart your healthcare journey with this essential foundational nursing course.',
    },
    {
      image: 'https://placehold.co/400x300/FFEAD9/333?text=DMLT',
      title: 'DMLT (Medical Lab Technician)',
      description: 'Learn diagnostic testing skills and laboratory operations for hospitals and clinics.',
    },
    {
      image: 'https://placehold.co/400x300/D9FFDB/333?text=OT+Technician',
      title: 'Diploma in OT Technician',
      description: 'Assist surgeons and manage OT environments with hands-on surgical tech training.',
    },
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <h3 className="section-subtitle" style={{ color: '#555' }}>Jai Prakash College Of Health Science</h3>
        <h2 className="section-title">Healthcare & Paramedical Courses</h2>
        <p className="courses-intro">
          No matter your academic background — even if you haven’t completed 10th or 12th — our skill-based, government-recognized programs open the doors to healthcare careers in India and abroad. Hundreds of our students are already employed in hospitals, diagnostic labs, and international medical centers with excellent salaries.
        </p>
        <div className="courses-grid">
          {courseData.map(course => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
