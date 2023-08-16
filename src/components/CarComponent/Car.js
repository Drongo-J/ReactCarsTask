import React, { useState } from "react";
import "./Car.css";

export default function Car({ carData, updateCar }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  function callUpdateCar() {
    updateCar(carData);
  }

  return (
    <div className="car-card" onClick={() => callUpdateCar()}>
      <img
        src={!imageLoaded ? "https://media.aykhan.net/assets/images/step-it-academy/react/task6/car-image.jpg" : carData.ImagePath}
        alt={!imageLoaded ? "Loading..." : `${carData.Brand} ${carData.Model}`}
        className={`car-image ${imageLoaded ? "visible" : ""}`}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="car-price">
        <strong>Price: ${carData.Price}</strong>
      </div>
      <div className="car-brand-model">
        {carData.Brand} {carData.Model}
      </div>
      <div className="car-year-mileage">
        {carData.Year} - {carData.Mileage.toLocaleString()} miles
      </div>
      <div className="car-created-at">
        <span>Created at:</span> {carData.CreatedAt.toDateString()}
      </div>
    </div>
  );
}
