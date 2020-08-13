import React, { useEffect, useRef } from 'react';
import Photo from './Photo';
import './PhotoRow.css';

function PhotoRow({ idx, row, visible, getOffset }) {

  const rowRef = useRef();

  useEffect(() => {
    const top = rowRef.current.offsetTop;
    const bottom = rowRef.current.offsetHeight + top;
    getOffset(idx, top, bottom);
  }, []);

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
