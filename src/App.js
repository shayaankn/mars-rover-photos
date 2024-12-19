import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import PhotoResult from "./components/PhotoResult";
import PhotoResultInfo from "./components/PhotoResultInfo";
import "./App.css";
// import "./index.css";
// Commented out code

const App = () => {
  const [photo, setPhoto] = useState(null);
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const fetchPhotos = async (sol) => {
    const apiKey = "88ATa9tag5vTfCL4IexH6BfmhD1fENa9B90F1n03";
    setPhoto(null);
    setInfo(null);
    setIsLoading(true);
    setHasSearched(true);
    setNoResults(false);

    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`
      );
      const data = await response.json();

      if (data.photos.length === 0) {
        setNoResults(true);
      } else {
        const randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)];
        setPhoto(randomPhoto);
        setInfo({
          earth_date: randomPhoto.earth_date,
          rover_name: randomPhoto.rover.name,
          camera_name: randomPhoto.camera.full_name,
        });
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="main-div">
      <Navbar />
      <Form fetchPhotos={fetchPhotos} />
      <PhotoResult photo={photo} isLoading={isLoading} noResults={noResults} />
      <PhotoResultInfo info={info} />
    </div>
  );
};

export default App;
