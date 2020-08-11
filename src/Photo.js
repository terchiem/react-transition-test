import React from 'react';
import './Photo.css';

function Photo({ title, url, delay }) {
  return (
    <div className="Photo" style={{ animationDelay: delay + 'ms'}}>
      <img src={url} alt={title} />
    </div>
  );
}

export default Photo;
