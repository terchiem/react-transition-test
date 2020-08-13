import React, { useEffect, useRef, Children } from 'react';
import ReactDOM from 'react-dom';
import Photo from './Photo';
import './PhotoRow.css';

function PhotoRow({ idx, row, visible, getOffset }) {

  const rowRef = useRef();

  useEffect(() => {
    const top = rowRef.current.offsetTop;
    const bottom = rowRef.current.offsetHeight + top;
    getOffset(idx, top, bottom);
  }, []);

  useEffect(() => {
    console.log('visible is toggled')
  }, [visible])

  return (
    <div className="PhotoRow" ref={rowRef}>
      { row.length ?
          row.map((photo, i) => <Photo
            key={photo.id}
            url={photo.thumbnailUrl}
            title={photo.title}
            delay={photo.id*80}
            visible={visible.visible}
            idx={i}
          />) :
          null }
    </div>
  );
}

export default PhotoRow;
