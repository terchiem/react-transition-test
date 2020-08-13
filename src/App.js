import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import PhotoList from './PhotoList';

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

function App() {
  const [photos, setPhotos] = useState([]);
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(BASE_URL);
      const photoRows = [];
      const numPhotos = 100;
      const perRow = 6;

      for (let i = 0; i < numPhotos; i+=perRow) {
        photoRows.push(response.data.slice(i, i+perRow));
      }

      setPhotos(photoRows);
    }
    loadData();
  }, []);

  function clear() {
    setTemp(photos);
    setPhotos([]);
  }

  function load() {
    setPhotos(temp);
  }

  return (
    <div className="App">
      <button onClick={clear}>Clear</button>
      <button onClick={load}>Load</button>

      {photos.length ?
        <PhotoList photoRows={photos} /> :
        null}
    </div>
  );
}

export default App;
