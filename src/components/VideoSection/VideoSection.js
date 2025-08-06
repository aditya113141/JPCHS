// VideoSection.js
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

const defaultVideos = [
  { thumb: 'https://placehold.co/400x250/333/fff?text=Demo+1' },
  { thumb: 'https://placehold.co/400x250/333/fff?text=Demo+2' },
  { thumb: 'https://placehold.co/400x250/333/fff?text=Demo+3' },
  { thumb: 'https://placehold.co/400x250/333/fff?text=Demo+4' },
  { thumb: 'https://placehold.co/400x250/333/fff?text=Demo+5' },
  { thumb: 'https://placehold.co/400x250/333/fff?text=Demo+6' },
];

const VideoSection = ({ title, videos }) => {
  const finalVideos = videos && videos.length > 0 ? videos : defaultVideos;

  return (
    <section className="video-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="video-grid">
          {finalVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
