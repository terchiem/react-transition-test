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
      response.data.length = 50;
      setPhotos(response.data);
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

      <PhotoList photos={photos} />
    </div>
  );
}

export default App;
