// src/components/Home/Home.js - CORRECTED JSX SYNTAX

import React from 'react';

import HeroSlider from '../HeroSlider/HeroSlider';
import WhyJoinUs from '../WhyJoinUs/WhyJoinUs';
import AdmissionForm from '../AdmissionForm/AdmissionForm';
import VideoSection from '../VideoSection/VideoSection';
import Courses from '../Courses/Courses';
import Campuses from '../Campuses/Campuses';
import Testimonial from '../Testimonial/Testimonial';
import PlacementReviews from '../PlacementReviews/PlacementReviews';

const Home = () => {
    const incredibleLifeVideos = [
        { thumb: 'https://placehold.co/400x250/333/fff?text=Video+1' },
        { thumb: 'https://placehold.co/400x250/333/fff?text=Video+2' },
        { thumb: 'https://placehold.co/400x250/333/fff?text=Video+3' },
        { thumb: 'https://placehold.co/400x250/333/fff?text=Video+4' },
        { thumb: 'https://placehold.co/400x250/333/fff?text=Video+5' },
        { thumb: 'https://placehold.co/400x250/333/fff?text=Video+6' },
    ];

    const placementVideos = [
        { thumb: 'https://placehold.co/400x250/555/fff?text=Placement+1' },
        { thumb: 'https://placehold.co/400x250/555/fff?text=Placement+2' },
        { thumb: 'https://placehold.co/400x250/555/fff?text=Placement+3' },
    ];

    return (
        <>
            <HeroSlider />
            <WhyJoinUs />
            <AdmissionForm />
            
            {/* Corrected to a self-closing tag */}
            <VideoSection 
                title="Incredible Life at JPCHS" 
                videos={incredibleLifeVideos} 
                columns={3}
            />
            
            {/* Corrected to a self-closing tag */}
            <Courses />
            
            {/* Corrected to a self-closing tag */}
            <VideoSection 
                title="Placement and Internship Programs" 
                videos={placementVideos} 
                columns={3}
            />
            
            {/* Corrected to a self-closing tag */}
            <Campuses />
            
            {/* Corrected to a self-closing tag */}
            <Testimonial />
            
            {/* Corrected to a self-closing tag */}
            <PlacementReviews />
        </>
    );
}

export default Home;