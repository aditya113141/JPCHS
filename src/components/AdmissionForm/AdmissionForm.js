import React from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
  return (
    <section className="admission-section">
      <div className="container admission-container">
        <div className="admission-image">
          <img
            src="https://placehold.co/600x400/EAD9FF/333?text=JPCHS+Campus"
            alt="JPCHS Campus"
          />
        </div>
        <div className="admission-form-wrapper">
          <p className="form-subtitle">Jai Prakash College Of Health Science</p>
          <h2 className="form-title">Admission Open</h2>
          <form className="form">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
