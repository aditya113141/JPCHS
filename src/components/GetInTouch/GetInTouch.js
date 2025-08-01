// src/components/GetInTouch/GetInTouch.js (Corrected & Complete)
import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        message: '',
    });

    // State to manage submission status
    const [status, setStatus] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
                <div className="contact-info">
                    <p className="contact-pre-title">[ CONTACT US ]</p>
                    <h3 className="contact-heading">Let's Get in Touch</h3>
                    
                    {/* --- THIS IS THE PART THAT WAS MISSING --- */}
                    <div className="info-item">
                        <div className="info-icon">
                           <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info-text">
                            <h5>Email</h5>
                            <p>rchm.nzb@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                           <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="info-text">
                            <h5>Call Us</h5>
                            <p>+91 7416387602</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                           <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info-text">
                            <h5>Address</h5>
                            <p>E-17a,Umarani Complex, Opp-Tata Jasper Industries,Borgaon(p),Nizambad,503230</p>
                        </div>
                    </div>
                     {/* --- END OF MISSING PART --- */}

                </div>
                <div className="contact-form">
                    <h4 className="form-heading">SEND MESSAGE</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input type="text" name="number" placeholder="Number" value={formData.number} onChange={handleChange} required />
                        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
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
