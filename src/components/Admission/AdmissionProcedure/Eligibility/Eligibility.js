import React from 'react';
import './Eligibility.css';

// Data for the courses
const nursingCourses = [
  { sl: 1, name: 'A.N.M', duration: '2 Years', eligibility: '10+2 any stream' },
  { sl: 2, name: 'GNM', duration: '3 Years', eligibility: '10+2 (With English Having 40% Marks)' },
  { sl: 3, name: 'B.Sc. Nursing', duration: '4 Years', eligibility: '10+2 (PCB minimum 45% Marks) with English' },
];

const degreeCourses = [
  { sl: 4, name: 'Bachelor of Hospital Management (BHM)', duration: '3 Years', eligibility: '10+2 any stream with English' },
  { sl: 5, name: 'Bachelor of Physiotherapy (BPT)', duration: '4 Years & 6 Months', eligibility: '10+2 with Bio' },
  { sl: 6, name: 'Bachelor of Occupational Therapy (BOT)', duration: '4 Years & 6 Months', eligibility: '10+2 with Bio' },
  { sl: 7, name: 'Bachelor of Operation Theatre Technology (B.O.T.T)', duration: '4 Years & 6 Months', eligibility: '10+2 with Bio' },
  { sl: 8, name: 'Bachelor of Radiology & Imaging Technology (B.R.I.T)', duration: '4 Years & 6 Months', eligibility: '10+2 with Bio' },
  { sl: 9, name: 'Bachelor of Medical Laboratory Technology (B.M.L.T)', duration: '4 Years & 6 Months', eligibility: '10+2 with Bio' },
];

const diplomaCourses = [
  { sl: 10, name: 'Dresser', duration: '1 Year', eligibility: '10th Pass' },
  { sl: 11, name: 'Diploma in Medical Laboratory Technology (D.M.L.T)', duration: '2 Years', eligibility: 'I.Sc. with Bio' },
  { sl: 12, name: 'Diploma in Operation Theatre Technician (D.O.T.T)', duration: '2 Years', eligibility: 'I.Sc. with Bio' },
  { sl: 13, name: 'Diploma in Radiology and Imaging Technology (D.R.I.T)', duration: '2 Years', eligibility: 'I.Sc. with Bio' },
];


const Eligibility = () => {
  return (
    <div className="eligibility-page-container">
      <div className="main-title-bar">
        <h2>COURSES ELIGIBILITY</h2>
      </div>

      {/* Nursing Courses Table */}
      <div className="course-section">
        <h3 className="section-title">NURSING COURSE:</h3>
        <table className="eligibility-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Course</th>
              <th>Duration</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {nursingCourses.map((course) => (
              <tr key={course.sl}>
                <td data-label="SL">{course.sl}</td>
                <td data-label="Course">{course.name}</td>
                <td data-label="Duration">{course.duration}</td>
                <td data-label="Eligibility">{course.eligibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Para Medical - Degree Courses Table */}
      <div className="course-section">
        <h3 className="section-title">PARA MEDICAL - DEGREE COURSES</h3>
        <table className="eligibility-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Course</th>
              <th>Duration</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {degreeCourses.map((course) => (
              <tr key={course.sl}>
                <td data-label="SL">{course.sl}</td>
                <td data-label="Course">{course.name}</td>
                <td data-label="Duration">{course.duration}</td>
                <td data-label="Eligibility">{course.eligibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Para Medical - Diploma Courses Table */}
      <div className="course-section">
        <h3 className="section-title">PARA MEDICAL - DIPLOMA COURSES</h3>
        <table className="eligibility-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Course</th>
              <th>Duration</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {diplomaCourses.map((course) => (
              <tr key={course.sl}>
                <td data-label="SL">{course.sl}</td>
                <td data-label="Course">{course.name}</td>
                <td data-label="Duration">{course.duration}</td>
                <td data-label="Eligibility">{course.eligibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eligibility;
