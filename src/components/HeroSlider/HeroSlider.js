import React from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  return (
    <section className="hero-slider">
      <div className="slider-wrapper">
        <div className="slide">
          <img src="https://placehold.co/1600x800/eee/333?text=JPCHS+Campus+Life" alt="JPCHS Banner 1" />
          <div className="slide-caption">
            <h1>Jai Prakash College Of Health Science</h1>
            <p>Students actively participating in clinical simulations and patient care training.</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://placehold.co/1600x800/ddd/333?text=World+Class+Labs" alt="JPCHS Banner 2" />
          <div className="slide-caption">
            <h1>Advanced Medical Laboratories</h1>
            <p>Hands-on learning with modern diagnostic equipment and labs.</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://placehold.co/1600x800/ccc/333?text=Placement+Support" alt="JPCHS Banner 3" />
          <div className="slide-caption">
            <h1>Assured Healthcare Placements</h1>
            <p>Begin your journey in the medical field with our 100% placement assistance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
