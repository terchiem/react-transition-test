import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Photo from './Photo';
import './PhotoList.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

function PhotoList() {
  const [photos, setPhotos] = useState([]);


  useEffect(() => {
    async function loadData() {
      const response = await axios.get(BASE_URL);
      response.data.length = 50;
      setPhotos(response.data);
    }
    loadData();

  }, []);

  return (
    <div className="PhotoList">
      { photos.length ?
          photos.map(photo => <Photo key={photo.id} url={photo.thumbnailUrl} title={photo.title} />) :
          null }
    </div>
  );
}

export default PhotoList;
