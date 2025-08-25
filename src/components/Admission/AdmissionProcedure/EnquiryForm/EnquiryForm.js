import React, { useState, useEffect } from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    subject: '',
    message: '',
    captcha: ''
  });

  // State for the CAPTCHA
  const [captchaCode, setCaptchaCode] = useState('');

  // Function to generate a new CAPTCHA code
  const generateCaptcha = () => {
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptchaCode(randomCode);
  };

  // Generate a CAPTCHA code when the component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captcha.toUpperCase() === captchaCode) {
      // In a real application, you would send the formData to a server here
      alert('Enquiry submitted successfully!');
      // Reset form and generate new CAPTCHA
      setFormData({
        fullName: '',
        contactNumber: '',
        email: '',
        subject: '',
        message: '',
        captcha: ''
      });
      generateCaptcha();
    } else {
      alert('Invalid CAPTCHA. Please try again.');
      // Clear captcha input and generate new CAPTCHA
      setFormData(prevState => ({ ...prevState, captcha: '' }));
      generateCaptcha();
    }
  };

  return (
    <div className="enquiry-form-page-container">
      <div className="main-title-bar">
        <h2>ENQUIRY</h2>
      </div>

      <div className="form-content-wrapper">
        <h3 className="form-title">ENQUIRY FORM</h3>
        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select</option>
              
              <optgroup label="Paramedical-Degree">
                <option value="Bachelor of Physiotherapy">Bachelor of Physiotherapy</option>
                <option value="Bachelor of Hospital Management">Bachelor of Hospital Management</option>
                <option value="Bachelor of Occupational Therapy">Bachelor of Occupational Therapy</option>
                <option value="Bachelor of Medical Laboratory Technology">Bachelor of Medical Laboratory Technology</option>
                <option value="Bachelor of Operation Theater Technology">Bachelor of Operation Theater Technology</option>
                <option value="Bachelor of Radio Imaging Technology">Bachelor of Radio Imaging Technology</option>
              </optgroup>

              <optgroup label="Paramedical-Diploma">
                <option value="Diploma in Medical Laboratory Technology (DMLT)">Diploma in Medical Laboratory Technology (DMLT)</option>
                <option value="Diploma in Medical Radiography (X-Ray)">Diploma in Medical Radiography (X-Ray)</option>
                <option value="Diploma of Operation Theater Technology (DOTT)">Diploma of Operation Theater Technology (DOTT)</option>
              </optgroup>

              <optgroup label="Certificate Course">
                <option value="Certificate in Medical Dressing">Certificate in Medical Dressing</option>
              </optgroup>
              
              <optgroup label="Nursing">
                <option value="Auxiliary Nurse and Midwife (ANM)">Auxiliary Nurse and Midwife (ANM)</option>
                <option value="General Nursing and Midwifery (GNM)">General Nursing and Midwifery (GNM)</option>
                <option value="B.SC. Nursing">B.SC. Nursing</option>
              </optgroup>

            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group captcha-group">
            <label htmlFor="captcha">CAPTCHA</label>
            <div className="captcha-box">
              <span className="captcha-code">{captchaCode}</span>
              <button type="button" onClick={generateCaptcha} className="refresh-captcha">
                &#x21bb;
              </button>
            </div>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
