import React, { useEffect, useState } from 'react';
import produce from 'immer';
import _ from 'lodash';
import PhotoRow from './PhotoRow';
import './PhotoList.css';


function PhotoList({ photoRows }) {

  const [visMap, setVisMap] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setVisMap(() => Array(photoRows.length).fill({
      visible: false
    }));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (photoRows.length === visMap.length) {
      setMapLoaded(true);
    }
  }, [visMap]);

  useEffect(() => {
    if (mapLoaded) {
      window.addEventListener('scroll', _.debounce(handleScroll, 10));
      window.scrollTo(window.scrollX, window.scrollY - 1);
      window.scrollTo(window.scrollX, window.scrollY + 1);
    }
  }, [mapLoaded]);


  function handleScroll(e) {
    const clientTop = e.target.scrollingElement.scrollTop;
    const clientBottom = e.target.scrollingElement.clientHeight + clientTop;

    visMap.forEach((row, i) => {
      const { top, bottom, visible } = row;
      const slideInAt = clientBottom - ((bottom-top) / 2);

      const isHalfShown = slideInAt > top;
      const isNotScrolledPast = window.scrollY < bottom;

      if (isHalfShown && isNotScrolledPast) {
        setVisibility(i, true);
      } else {
        setVisibility(i, false);
      }
    });
  }

  function setVisibility(idx, visible) {
    console.log(`updated ${idx} to: ${visible}`);
    setVisMap(state => produce(state, draft => {
      draft[idx].visible = visible;
    }));
  }

  function getOffset(idx, top, bottom) {
    setVisMap(state => produce(state, draft => {
      draft[idx].top = top;
      draft[idx].bottom = bottom;
    }));
  }

  return (
    <div className="PhotoList">
      { loaded && photoRows.length ?
          photoRows.map((row, idx) => <PhotoRow key={row[0].id} idx={idx} row={row} visible={visMap[idx]} getOffset={getOffset}/>) :
          null }
    </div>
  );
}

export default PhotoList;
