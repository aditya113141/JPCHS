// src/components/GetInTouch/GetInTouch.js (Functional)
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

    // State to manage submission status (e.g., "Submitting...", "Success!", "Error!")
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
                // Clear the form after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    number: '',
                    message: '',
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
                    {/* ... (info items remain the same) ... */}
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
                        {/* Display status message */}
                        {status && <p className="form-status">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
