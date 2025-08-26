import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPopup.css';

const RegistrationPopup = () => {
    return (
        <Link to="/registration" className="registration-popup">
            <div className="popup-text">Registration Open</div>
        </Link>
    );
};

export default RegistrationPopup;
