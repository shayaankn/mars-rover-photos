import React from "react";

const PhotoResultInfo = ({ info }) => (
  <div id="photoResultInfo">
    {info && (
      <>
        <p style={{ paddingRight: '5px' }}>
          <strong>Earth Date:</strong> {info.earth_date}
        </p>
        <p style={{ paddingRight: '5px' }}>
          <strong>Rover Name:</strong> {info.rover_name}
        </p>
        <p>
          <strong>Camera Name:</strong> {info.camera_name}
        </p>
      </>
    )}
  </div>
);

export default PhotoResultInfo;
