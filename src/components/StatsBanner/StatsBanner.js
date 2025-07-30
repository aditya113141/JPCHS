import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useCountUp from '../../hooks/useCountUp';
import './StatsBanner.css';

const StatItem = ({ end, label }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
    const count = useCountUp(end, 2000, isIntersecting);
    return (
        <div ref={ref} className={`stat-item ${isIntersecting ? 'is-visible' : ''}`}>
            <span className="stat-number">{count}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
};

const StatsBanner = () => (
    <section className="stats-banner">
        <div className="stats-overlay"></div>
        <div className="container stats-content">
            <p>We've worked with some great companies already. We think you should join them in your quest for top talent.</p>
            <div className="stats-grid">
                <StatItem end={1604} label="Candidates" />
                <StatItem end={1623} label="Jobs Found" />
            </div>
        </div>
    </section>
);

export default StatsBanner;