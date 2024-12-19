import React, { useState } from "react";

const Form = ({ fetchPhotos }) => {
  const [sol, setSol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPhotos(sol);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="solInput">Enter Martian Sol:</label>
      <input
        type="number"
        id="solInput"
        min="0"
        value={sol}
        onChange={(e) => setSol(e.target.value)}
        required
      />
      <button type="submit">Get Photo</button>
      <p>
        Photos are sorted by the sol (Martian day) they were taken, starting
        from the rover's landing, e.g., sol 1000 for Curiosity's 1000th day.
      </p>
    </form>
  );
};

export default Form;
