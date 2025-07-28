import React from 'react';
import './App.css';
import './index.css';

import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import WhyJoinUs from './components/WhyJoinUs/WhyJoinUs';
import AdmissionForm from './components/AdmissionForm/AdmissionForm';
import VideoSection from './components/VideoSection/VideoSection';
import Courses from './components/Courses/Courses';
import Campuses from './components/Campuses/Campuses';
import Testimonials from './components/Testimonial/Testimonial';
import PlacementReviews from './components/PlacementReviews/PlacementReviews';
import Footer from './components/Footer/Footer';

function App() {
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
    <div className="App">
      <Header />
      <main>
        <HeroSlider />
        <WhyJoinUs />
        <AdmissionForm />
        <VideoSection
          title="Incredible Life at Reyansh"
          videos={incredibleLifeVideos}
          columns={3}
        />
        <Courses />
        <VideoSection
          title="Placement and Internship Programs"
          videos={placementVideos}
          columns={3}
        />
        <Campuses />
        <Testimonials />
        <PlacementReviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;