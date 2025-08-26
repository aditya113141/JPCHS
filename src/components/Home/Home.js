// src/components/Home/Home.js

import React from 'react';

import HeroSlider from '../HeroSlider/HeroSlider';
import WhyJoinUs from '../WhyJoinUs/WhyJoinUs';
import AdmissionOpen from '../AdmissionOpen/AdmissionOpen';
import VideoSection from '../VideoSection/VideoSection';
import Courses from '../Courses/Courses';
import Campuses from '../Campuses/Campuses';
import Testimonial from '../Testimonial/Testimonial';
import PlacementReviews from '../PlacementReviews/PlacementReviews';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
// 1. Import the new RegistrationPopup component
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';

const Home = () => {
    // Your video data arrays...
    const incredibleLifeVideos = [
        { thumb: 'https://placehold.co/400x250/333/fff?text=Video+1' },
        // ... other videos
    ];

    const placementVideos = [
        { thumb: 'https://placehold.co/400x250/555/fff?text=Placement+1' },
        // ... other videos
    ];

    return (
        <>
            <HeroSlider />
            <WhyJoinUs />
            <AdmissionOpen />
            <VideoSection title="Incredible Life at JPCHS" />
            <Courses />
            <VideoSection title="Placement and Internship Programs" />
            <Campuses />
            <Testimonial />
            <PlacementReviews />
            <RegistrationForm />
            {/* 2. Add the RegistrationPopup component here */}
            <RegistrationPopup />
        </>
    );
}

export default Home;
