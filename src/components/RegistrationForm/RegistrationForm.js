import React, { useState, useEffect } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '', motherName: '', fatherName: '', religion: '',
        nationality: '', gender: '', category: '', dob: '',
        isPhysicallyHandicapped: '', city: '', permanentAddress: '', pinCode: '',
        state: '', ruralOrUrban: '', contactNo: '', parentContactNo: '',
        aadhaarNo: '', agreeTerms: false, courseApplied: '', admissionYear: '',
        migrationDate: '', migrationCertNo: '', collegeRollNo: '', session: '',
        captcha: ''
    });

    const [education, setEducation] = useState([
        { qualification: '', subject: '', passingYear: '', percentage: '', board: '', total: '' },
        { qualification: '', subject: '', passingYear: '', percentage: '', board: '', total: '' },
        { qualification: '', subject: '', passingYear: '', percentage: '', board: '', total: '' }
    ]);

    const [files, setFiles] = useState({
        tenthMarksheet: null, twelfthMarksheet: null, migrationCert: null,
        twelfthCert: null, handicapCert: null, photo: null,
        signatureCert: null, casteCert: null
    });

    const [captchaCode, setCaptchaCode] = useState('');

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const randomCode = Math.floor(10000 + Math.random() * 90000).toString();
        setCaptchaCode(randomCode);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFiles(prev => ({ ...prev, [name]: files[0] }));
    };

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        const newEducation = [...education];
        newEducation[index][name] = value;
        setEducation(newEducation);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.captcha !== captchaCode) {
            return alert('Invalid CAPTCHA. Please try again.');
        }
        if (!formData.agreeTerms) {
            return alert('You must agree to the terms and conditions.');
        }

        const submissionData = new FormData();
        // Append text data
        for (const key in formData) {
            submissionData.append(key, formData[key]);
        }
        // Append file data
        for (const key in files) {
            if (files[key]) {
                submissionData.append(key, files[key]);
            }
        }
        // Append education data
        submissionData.append('education', JSON.stringify(education));

        try {
            const response = await fetch('http://localhost:5000/submit-registration', {
                method: 'POST',
                body: submissionData,
            });
            if (response.ok) {
                alert('Registration submitted successfully!');
            } else {
                const errorData = await response.json();
                alert(`Submission failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="registration-page-container">
            <div className="main-title-bar">
                <h2>ONLINE REGISTRATION</h2>
            </div>
            <div className="registration-form-wrapper">
                <form onSubmit={handleSubmit} className="registration-form">
                    {/* Personal Info */}
                    <div className="form-section">
                        <div className="form-group"><label>Name *</label><input type="text" name="name" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Mother's Name *</label><input type="text" name="motherName" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Father's Name *</label><input type="text" name="fatherName" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Religion *</label><input type="text" name="religion" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Nationality *</label><input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required /></div>
                        <div className="form-group"><label>Gender *</label><input type="text" name="gender" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Category *</label><input type="text" name="category" onChange={handleChange} required /></div>
                        <div className="form-group"><label>D.O.B. *</label><input type="date" name="dob" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Is Physically Handicapped? *</label><input type="text" name="isPhysicallyHandicapped" value={formData.isPhysicallyHandicapped} onChange={handleChange} required /></div>
                        <div className="form-group"><label>City *</label><input type="text" name="city" onChange={handleChange} required /></div>
                    </div>
                    {/* Address & Contact */}
                    <div className="form-section">
                        <div className="form-group full-width"><label>Permanent Address *</label><textarea name="permanentAddress" onChange={handleChange} required></textarea></div>
                        <div className="form-group"><label>Pin Code *</label><input type="text" name="pinCode" onChange={handleChange} required /></div>
                        <div className="form-group"><label>State *</label><input type="text" name="state" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Rural/urban *</label><input type="text" name="ruralOrUrban" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Contact No. *</label><input type="tel" name="contactNo" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Parent's Contact No. *</label><input type="tel" name="parentContactNo" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Aadhar No. *</label><input type="text" name="aadhaarNo" onChange={handleChange} required /></div>
                    </div>
                    {/* Educational Details */}
                    <div className="education-details">
                        <h4>Educational Details:</h4>
                        {education.map((edu, index) => (
                            <div key={index} className="education-row">
                                <input type="text" name="qualification" placeholder="Qualification *" value={edu.qualification} onChange={e => handleEducationChange(index, e)} required />
                                <input type="text" name="subject" placeholder="Subject *" value={edu.subject} onChange={e => handleEducationChange(index, e)} required />
                                <input type="text" name="passingYear" placeholder="Passing Year *" value={edu.passingYear} onChange={e => handleEducationChange(index, e)} required />
                                <input type="text" name="percentage" placeholder="Percentage *" value={edu.percentage} onChange={e => handleEducationChange(index, e)} required />
                                <input type="text" name="board" placeholder="Board *" value={edu.board} onChange={e => handleEducationChange(index, e)} required />
                                <input type="text" name="total" placeholder="Total *" value={edu.total} onChange={e => handleEducationChange(index, e)} required />
                            </div>
                        ))}
                    </div>
                    {/* Declaration */}
                    <div className="declaration-section">
                        <h4>Declaration:</h4>
                        <ol>
                            <li>I shall obey the Rules & Regulations of the Institute and the Institute Mess.</li>
                            <li>I shall not take part in any subversive activities including ragging in any form in the Institute Campus or the Institute Mess or anywhere at Durgapur or outside anytime during my stay at the Institute.</li>
                            <li>If I involve myself in any type of subversive activities, the Institute Authority alone or in consultation with local Administration may take any type of disciplinary action as per prevailing Rules & Regulations of the College.</li>
                            <li>I also agree to pay College Installment / Hostel fees in time. If I fail to pay the Hostel fees / Installment for consistently two months / two Installments I shall be liable to be struck off from the College roll.</li>
                            <li>All the information furnished here are true to the best of my knowledge and belief.</li>
                        </ol>
                        <div className="form-group checkbox-agree">
                            <input type="checkbox" id="agreeTerms" name="agreeTerms" onChange={handleChange} required />
                            <label htmlFor="agreeTerms">I agree with terms & condition. *</label>
                        </div>
                    </div>
                    {/* Course & Documents */}
                    <div className="form-section">
                        <div className="form-group"><label>Course Applied *</label><input type="text" name="courseApplied" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Admission Year *</label><input type="text" name="admissionYear" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Migration Dates *</label><input type="date" name="migrationDate" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Migration Certificate Number *</label><input type="text" name="migrationCertNo" onChange={handleChange} required /></div>
                        <div className="form-group"><label>College Roll No *</label><input type="text" name="collegeRollNo" onChange={handleChange} required /></div>
                        <div className="form-group"><label>Session *</label><input type="text" name="session" onChange={handleChange} required /></div>
                    </div>
                    {/* File Uploads */}
                    <div className="file-upload-section">
                        <h4>Documents to be Submitted: (images only)</h4>
                        <div className="form-section">
                            <div className="form-group"><label>10th Mark Sheet *</label><input type="file" name="tenthMarksheet" onChange={handleFileChange} required /></div>
                            <div className="form-group"><label>12th Marksheet *</label><input type="file" name="twelfthMarksheet" onChange={handleFileChange} required /></div>
                            <div className="form-group"><label>Migration Certificate(intermediate) *</label><input type="file" name="migrationCert" onChange={handleFileChange} required /></div>
                            <div className="form-group"><label>12th certificate *</label><input type="file" name="twelfthCert" onChange={handleFileChange} required /></div>
                            <div className="form-group"><label>Physically Handicap Certificate</label><input type="file" name="handicapCert" onChange={handleFileChange} /></div>
                            <div className="form-group"><label>Upload Photo *</label><input type="file" name="photo" onChange={handleFileChange} required /></div>
                            <div className="form-group"><label>Upload signature Certificate</label><input type="file" name="signatureCert" onChange={handleFileChange} /></div>
                            <div className="form-group"><label>Caste Certificate *</label><input type="file" name="casteCert" onChange={handleFileChange} required /></div>
                        </div>
                    </div>
                    {/* Captcha and Submit */}
                    <div className="captcha-submit-section">
                        <div className="captcha-wrapper">
                            <input type="text" name="captcha" placeholder="captcha" onChange={handleChange} required />
                            <span className="captcha-code">{captchaCode}</span>
                        </div>
                        <button type="submit" className="submit-btn">SUBMIT HERE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
