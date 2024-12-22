import React from "react";

const PhotoResult = ({ photo, isLoading, noResults }) => {
  if (isLoading) {
    return (
      <div id="photoResult">
        <p>Loading...</p>
      </div>
    );
  }

  if (noResults) {
    return (
      <div id="photoResult">
        <p>No photos available for this sol.</p>
      </div>
    );
  }

  return (
    <div id="photoResult">
      {photo ? (
        // <img src={photo.img_src} alt="Mars Rover Photo" />
        <img src={photo.img_src} alt="" />
      ) : null}
    </div>
  );
};

export default PhotoResult;
