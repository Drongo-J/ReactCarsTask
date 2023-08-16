import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./AddCar.css";
import cars from "../../data/cars";

export default function AddCar({ goBack }) {
  const [nextId, setNextId] = useState(20);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    imageUrl: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like sending it to a server
    console.log("Form data:", formData);
    var newCar = {
      Id: nextId,
      Brand: formData.brand,
      Model: formData.model,
      Year: formData.year,
      Price: formData.price,
      Mileage: formData.mileage,
      ImagePath: formData.imageUrl,
      CreatedAt: new Date(),
    };
    cars.push(newCar);

    alert("Car was added successfully");

    setNextId(nextId + 1);

    // Reset the form fields after submission
    setFormData({
      brand: "",
      model: "",
      year: "",
      price: "",
      mileage: "",
      imageUrl: "",
    });
  };

  return (
    <div className="form-container">
      <button onClick={() => goBack()} className="back-btn">
        &#8656;
      </button>

      <div>
        <h3>Add Car</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="brand">Brand</Label>
            <Input
              type="text"
              id="brand"
              placeholder="Enter Brand Name"
              value={formData.brand}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="model">Model</Label>
            <Input
              type="text"
              id="model"
              placeholder="Enter Model Name"
              value={formData.model}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year</Label>
            <Input
              type="number"
              id="year"
              placeholder="Enter Year of Car"
              min="1950"
              max="2023"
              value={formData.year}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="number"
              id="price"
              placeholder="Enter Price"
              min="0"
              value={formData.price}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="mileage">Mileage</Label>
            <Input
              type="number"
              id="mileage"
              placeholder="Enter Mileage"
              min="0"
              value={formData.mileage}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="imageUrl">Image URL</Label>
            <Input
              type="text"
              id="imageUrl"
              placeholder="Enter Car Image URL"
              value={formData.imageUrl}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Button type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
