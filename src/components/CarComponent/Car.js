import React from "react";
import "./Car.css";

export default function Car({ carData, updateCar }) {
  function callUpdateCar() {
    updateCar(carData);
  }

  return (
    <div className="car-card" onClick={() => callUpdateCar()}>
      <img
        src={carData.ImagePath}
        alt={`${carData.Brand} ${carData.Model}`}
        className="car-image"
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
