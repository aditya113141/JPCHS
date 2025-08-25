import React, { useState, useEffect } from 'react';
import './ApplyOnline.css';

const ApplyOnline = () => {
    // State for all form fields
    const [formData, setFormData] = useState({
        fullName: '',
        fatherName: '',
        motherName: '',
        photo: null,
        signature: null,
        gender: '',
        dob: '',
        casteCategory: '',
        mobileNumber: '',
        emailAddress: '',
        aadhaarNumber: '',
        address: '',
        courseName: '',
        session: '',
        feePaidAmount: '',
        captcha: ''
    });

    const [captchaCode, setCaptchaCode] = useState('');

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const randomCode = Math.floor(10000 + Math.random() * 90000).toString();
        setCaptchaCode(randomCode);
    };

    // Handle standard input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prev => ({ ...prev, [name]: files[0] }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.captcha !== captchaCode) {
            alert('Invalid CAPTCHA code. Please try again.');
            generateCaptcha();
            return;
        }

        const submissionData = new FormData();
        for (const key in formData) {
            submissionData.append(key, formData[key]);
        }

        try {
            // Send data to a new endpoint on our server
            const response = await fetch('http://localhost:5000/apply-online', {
                method: 'POST',
                body: submissionData,
            });

            if (response.ok) {
                alert('Application submitted successfully!');
                // Optionally reset form here
            } else {
                const errorData = await response.json();
                alert(`Submission failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    };

    return (
        <div className="apply-online-page-container">
            <div className="main-title-bar">
                <h2>APPLY ONLINE</h2>
            </div>
            <div className="apply-online-form-wrapper">
                <form onSubmit={handleSubmit} className="apply-online-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="fullName" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Father's Name</label>
                        <input type="text" name="fatherName" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Mother's Name</label>
                        <input type="text" name="motherName" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Photo (Images)</label>
                        <input type="file" name="photo" onChange={handleFileChange} required />
                    </div>
                    <div className="form-group">
                        <label>Signature (Images)</label>
                        <input type="file" name="signature" onChange={handleFileChange} required />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <select name="gender" onChange={handleChange} required>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="date" name="dob" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Caste Category</label>
                        <input type="text" name="casteCategory" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input type="tel" name="mobileNumber" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="emailAddress" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Aadhaar Number</label>
                        <input type="text" name="aadhaarNumber" onChange={handleChange} required />
                    </div>
                    <div className="form-group full-width">
                        <label>Correspondence/Permanent Address</label>
                        <textarea name="address" rows="4" onChange={handleChange} required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Course Name</label>
                        <input type="text" name="courseName" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Session</label>
                        <input type="text" name="session" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Fee Paid Amount</label>
                        <input type="text" name="feePaidAmount" onChange={handleChange} required />
                    </div>
                    <div className="form-group captcha-group-apply">
                        <label>Captcha</label>
                        <div className="captcha-wrapper">
                            <input type="text" name="captcha" onChange={handleChange} required />
                            <span className="captcha-code">{captchaCode}</span>
                        </div>
                    </div>
                    <div className="form-group full-width submit-wrapper">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyOnline;
