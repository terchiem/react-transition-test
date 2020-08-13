import React from 'react';
import './Photo.css';

function Photo({ title, url, delay, visible, idx }) {
  return (
    <div className={`Photo ${visible ? 'Photo-show' : ''}`} style={{ transitionDelay: idx*120 + 'ms' }}>
      <img src={url} alt={title} />
    </div>
  );
}

export default Photo;
