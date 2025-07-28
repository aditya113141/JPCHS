import React from 'react';
import './VideoSection.css';

const VideoCard = ({ thumb }) => (
  <div className="video-card">
    <img src={thumb} alt="Video thumbnail" className="video-thumb" />
    <div className="play-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
);

const VideoSection = ({ title, videos, columns }) => {
  const gridClass = `video-grid video-grid-cols-${columns}`;
  return (
    <section className="video-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className={gridClass}>
          {videos.map((video, index) => <VideoCard key={index} {...video} />)}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;