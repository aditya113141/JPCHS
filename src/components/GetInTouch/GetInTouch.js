import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
    return (
        <section className="get-in-touch-section">
            <div className="container get-in-touch-container">
                <div className="contact-info">
                    <h3 className="contact-heading">Let's get in Touch</h3>
                    <div className="info-item">
                        <span className="info-icon"></span>
                        <p>rchm.nzb@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <span className="info-icon"></span>
                        <p>+91 7416387602</p>
                    </div>
                    <div className="info-item">
                        <span className="info-icon"></span>
                        <p>E-17a,Umarani Complex, Opp-Tata Jasper Industries,Borgaon(p),Nizambad,503230</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h4 className="form-heading">SEND A MESSAGE</h4>
                    <form>
                        <div className="form-row">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch; // <-- Make sure this line exists