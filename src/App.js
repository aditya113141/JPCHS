// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import CoursesPage from './components/CoursesPage/CoursesPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import ContactPage from './components/ContactPage/ContactPage'; // 1. Import the new page

function App() {
  return (
    <Router basename="/JPCHS"> {/* 3. Set the basename for routing */}
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} /> {/* 2. Add the new route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
