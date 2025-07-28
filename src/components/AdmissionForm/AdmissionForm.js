import React from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
  return (
    <section className="admission-section">
      <div className="container admission-container">
        <div className="admission-image">
          <img src="https://placehold.co/600x400/EAD9FF/333?text=Banquet+Hall" alt="Banquet Hall" />
        </div>
        <div className="admission-form-wrapper">
          <p className="form-subtitle">REYansh COLLEGE OF HOTEL MANAGEMET</p>
          <h2 className="form-title">Admission Open</h2>
          <form className="form">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Number" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;