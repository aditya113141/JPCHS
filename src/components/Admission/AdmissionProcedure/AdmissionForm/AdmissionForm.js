import React, { useState, useEffect } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
    // State for all form fields
    const [formData, setFormData] = useState({
        candidateName: '',
        course: '',
        gender: '',
        maritalStatus: '',
        category: '',
        studentSignature: null,
        studentPhoto: null,
        email: '',
        mobile: '',
        alternateNumber: '',
        parentsNumber: '',
        pincode: '',
        permanentAddress: '',
        correspondenceAddress: '',
        fatherHusbandName: '',
        fatherHusbandOccupation: '',
        motherName: '',
        placeOfBirth: '',
        dob: '',
        state: '',
        nationality: '',
        gpcInfo: 'No',
        hostel: 'No',
        captcha: ''
    });

    // State for educational qualifications table
    const [education, setEducation] = useState([
        { exam: 'Year 10th', board: '', subject: '', percentage: '', year: '', result: '' },
        { exam: 'Year 12th', board: '', subject: '', percentage: '', year: '', result: '' },
        { exam: 'Year graduation', board: '', subject: '', percentage: '', year: '', result: '' }
    ]);

    const [captchaCode, setCaptchaCode] = useState('');

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
        setCaptchaCode(randomCode);
    };

    // Handle standard input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (checked ? 'Yes' : 'No') : value
        }));
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prev => ({ ...prev, [name]: files[0] }));
    };

    // Handle changes in the education table
    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        const newEducation = [...education];
        newEducation[index][name] = value;
        setEducation(newEducation);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.captcha !== captchaCode) {
            alert('Invalid CAPTCHA code. Please try again.');
            generateCaptcha();
            return;
        }

        // Create a FormData object to send text and files
        const submissionData = new FormData();

        // Append all form fields
        for (const key in formData) {
            submissionData.append(key, formData[key]);
        }

        // Append education data as a JSON string
        submissionData.append('education', JSON.stringify(education));

        try {
            // Send data to the backend server (URL for the server we will create)
            const response = await fetch('http://localhost:5000/submit-admission', {
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
        <div className="admission-form-page-container">
            <div className="main-title-bar">
                <h2>ADMISSION ONLINE FORM</h2>
            </div>
            <div className="admission-form-wrapper">
                <h3 className="admission-form-title">APPLICATION FORM</h3>
                <form onSubmit={handleSubmit}>
                    {/* --- Personal Details --- */}
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Name of candidate *</label>
                            <input type="text" name="candidateName" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Select Course *</label>
                            <select name="course" onChange={handleChange} required>
                                <option value="">Select Course</option>
                                <option value="BPT">Bachelor of Physiotherapy</option>
                                {/* Add other courses */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Select Gender *</label>
                            <select name="gender" onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Are you married or single ? *</label>
                            <select name="maritalStatus" onChange={handleChange} required>
                                <option value="">Select Status</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Category *</label>
                            <select name="category" onChange={handleChange} required>
                                <option value="">Select Category</option>
                                <option value="General">General</option>
                                <option value="OBC">OBC</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Student Signature *</label>
                            <input type="file" name="studentSignature" onChange={handleFileChange} required />
                        </div>
                        <div className="form-group">
                            <label>Student Photo *</label>
                            <input type="file" name="studentPhoto" onChange={handleFileChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email Id *</label>
                            <input type="email" name="email" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Mobile *</label>
                            <input type="tel" name="mobile" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Alternate Number</label>
                            <input type="tel" name="alternateNumber" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Parents Number</label>
                            <input type="tel" name="parentsNumber" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Pincode</label>
                            <input type="text" name="pincode" onChange={handleChange} />
                        </div>
                    </div>

                    {/* --- Address Details --- */}
                    <div className="form-grid-half">
                        <div className="form-group">
                            <label>Permanent Address *</label>
                            <textarea name="permanentAddress" rows="4" onChange={handleChange} required></textarea>
                        </div>
                        <div className="form-group">
                            <label>Correspondence Address</label>
                            <textarea name="correspondenceAddress" rows="4" onChange={handleChange}></textarea>
                        </div>
                    </div>

                    {/* --- Family Details --- */}
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Father's/Husband Name *</label>
                            <input type="text" name="fatherHusbandName" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Father's/Husband Occupation</label>
                            <input type="text" name="fatherHusbandOccupation" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Mother's Name *</label>
                            <input type="text" name="motherName" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Place of Birth</label>
                            <input type="text" name="placeOfBirth" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Date of Birth *</label>
                            <input type="date" name="dob" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>State *</label>
                            <input type="text" name="state" onChange={handleChange} required />
                        </div>
                    </div>

                    {/* --- Educational Qualifications --- */}
                    <h4 className="education-title">GIVE THE FOLLOWING PARTICULARS CONCERNING YOUR EDUCATIONAL QUALIFICATION.</h4>
                    <div className="education-table-wrapper">
                        <table className="education-table">
                            <thead>
                                <tr>
                                    <th>EXAMINATION PASSED</th>
                                    <th>NAME OF THE UNIVERSITY/BOARD/INSTITUTION</th>
                                    <th>SUBJECT</th>
                                    <th>DIVISION AND PERCENTAGE</th>
                                    <th>YEAR OF PASSING</th>
                                    <th>RESULT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {education.map((edu, index) => (
                                    <tr key={index}>
                                        <td><input type="text" value={edu.exam} readOnly /></td>
                                        <td><input type="text" name="board" value={edu.board} onChange={(e) => handleEducationChange(index, e)} /></td>
                                        <td><input type="text" name="subject" value={edu.subject} onChange={(e) => handleEducationChange(index, e)} /></td>
                                        <td><input type="text" name="percentage" value={edu.percentage} onChange={(e) => handleEducationChange(index, e)} /></td>
                                        <td><input type="text" name="year" value={edu.year} onChange={(e) => handleEducationChange(index, e)} /></td>
                                        <td><input type="text" name="result" value={edu.result} onChange={(e) => handleEducationChange(index, e)} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* --- Other Details --- */}
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Nationality *</label>
                            <input type="text" name="nationality" onChange={handleChange} required />
                        </div>
                        <div className="form-group checkbox-group">
                            <label>do you want more information of GPC ?</label>
                            <div>
                                <input type="checkbox" id="gpcInfoYes" name="gpcInfo" onChange={handleChange} /> <label htmlFor="gpcInfoYes">Yes</label>
                            </div>
                        </div>
                         <div className="form-group checkbox-group">
                            <label>Do you require Hostel Accommodation?</label>
                            <div>
                                <input type="checkbox" id="hostelYes" name="hostel" onChange={handleChange} /> <label htmlFor="hostelYes">Yes</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Captcha Code</label>
                            <div className="captcha-box-admission">
                                <span className="captcha-code-admission">{captchaCode}</span>
                                <input type="text" name="captcha" onChange={handleChange} required />
                            </div>
                        </div>
                    </div>

                    <div className="submit-container">
                        <button type="submit" className="submit-btn-admission">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;
