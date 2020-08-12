import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import './PhotoRow.css';

function PhotoRow({ row }) {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('mounted row');
  }, []);

  function handleScroll(e) {
    console.log('hello');
  }

  return (
    <div className="PhotoRow" onScroll={handleScroll}>
      { row.length ?
          row.map(photo => <Photo key={photo.id} url={photo.thumbnailUrl} title={photo.title} delay={photo.id*80} />) :
          null }
    </div>
  );
}

export default PhotoRow;
