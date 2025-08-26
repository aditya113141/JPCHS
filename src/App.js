// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

// Layout of page components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import CoursesPage from './components/CoursesPage/CoursesPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import ContactPage from './components/ContactPage/ContactPage';
import AdmissionProcedure from './components/Admission/AdmissionProcedure/AdmissionProcedure/AdmissionProcedure';
import AdmissionForm from './components/Admission/AdmissionProcedure/AdmissionForm/AdmissionForm';
import EnquiryForm from './components/Admission/AdmissionProcedure/EnquiryForm/EnquiryForm';
import ApplyOnline from './components/Admission/AdmissionProcedure/ApplyOnline/ApplyOnline'
import Eligibility from './components/Admission/AdmissionProcedure/Eligibility/Eligibility';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';


function App() {
  return (
    <Router basename="/JPCHS">
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Existing Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* --- 2. Add the new routes for the admission pages --- */}
            <Route path="/admission-procedure" element={<AdmissionProcedure />} />
            <Route path="/admission-form" element={<AdmissionForm />} />
            <Route path="/enquiry-form" element={<EnquiryForm />} />
            <Route path="/apply-online" element={<ApplyOnline />} />
            <Route path="/eligibility" element={<Eligibility />} />

            <Route path="/registration" element={<RegistrationForm />} />
            

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
