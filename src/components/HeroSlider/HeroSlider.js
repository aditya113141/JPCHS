import React from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  return (
    <section className="hero-slider">
      <div className="slider-wrapper">
        <div className="slide">
          <img src="https://placehold.co/1600x800/eee/333?text=Banner+Image+1" alt="Banner 1" />
          <div className="slide-caption">
            <h1>Reyansh college of Hotel managements</h1>
            <p>Student's role play Of welcoming a guest to the hotel as a part of front office</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://placehold.co/1600x800/ddd/333?text=Banner+Image+2" alt="Banner 2" />
          <div className="slide-caption">
            <h1>World-Class Training Facilities</h1>
            <p>Experience learning in a real-world hotel environment.</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://placehold.co/1600x800/ccc/333?text=Banner+Image+3" alt="Banner 3" />
          <div className="slide-caption">
            <h1>Guaranteed Placements</h1>
            <p>Your career in hospitality starts here with a 100% placement guarantee.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;