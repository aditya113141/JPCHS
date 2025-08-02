import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          firstName: '', lastName: '', email: '', number: '', message: '',
        });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section className="get-in-touch-section">
      <div className="container get-in-touch-container">
        {/* Contact Info */}
        <div className="contact-info">
          <p className="contact-pre-title">[ CONTACT US ]</p>
          <h3 className="contact-heading">Let's Get in Touch</h3>

          <div className="info-item">
            <div className="info-icon"><i className="fas fa-envelope"></i></div>
            <div className="info-text">
              <h5>Email</h5>
              <p>contact@jpchs.in</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
            <div className="info-text">
              <h5>Phone</h5>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div className="info-text">
              <h5>Address</h5>
              <p>Fatepur Chirimara, Kajipur, P.O-Thathan Bujurge,<br />P.S- Hajipur, Hajipur, Bihar 844125</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h4 className="form-heading">SEND MESSAGE</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" disabled={status === 'Submitting...'}>
              {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
