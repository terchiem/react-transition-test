import React from 'react';
import Photo from './Photo';
import './PhotoList.css';


function PhotoList({ photos }) {


  return (
    <div className="PhotoList">
      { photos.length ?
          photos.map(photo => <Photo key={photo.id} url={photo.thumbnailUrl} title={photo.title} delay={photo.id*80} />) :
          null }
    </div>
  );
}

export default PhotoList;
