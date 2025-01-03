import React, { useState } from "react";

const Form = ({ fetchPhotos }) => {
  const [earthDate, setEarthDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPhotos(earthDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dateInput">Enter Date:</label>
      <input
        type="date"
        id="dateInput"
        value={earthDate}
        onChange={(e) => setEarthDate(e.target.value)}
        required
      />
      <button type="submit">Get Photo</button>
      <p>
        Tip: Try searching for images from August 7, 2012, or later.
      </p>
    </form>
  );
};

export default Form;
