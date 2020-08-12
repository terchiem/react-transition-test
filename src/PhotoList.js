import React from 'react';
import PhotoRow from './PhotoRow';
import './PhotoList.css';


function PhotoList({ photoRows }) {

  return (
    <div className="PhotoList">
      { photoRows.length ?
          photoRows.map(row => <PhotoRow key={row[0].id} row={row} />) :
          null }
    </div>
  );
}

export default PhotoList;
