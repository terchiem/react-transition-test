import React from 'react';
import './Photo.css';

function Photo({ title, url }) {
  return (
    <div className="Photo">
      <img src={url} alt={title} />
    </div>
  );
}

export default Photo;
