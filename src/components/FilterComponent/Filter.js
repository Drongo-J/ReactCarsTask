import { React, useState } from "react";
import "./Filter.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountUp,
  faSortAmountDown,
  faSortAlphaDown,
  faSortAlphaUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import cars from "../../data/cars";

export default function Filter({ addCar, handleSortByPrice, handleSortByBrand, priceSortType, brandSortType }) {
  function callHandleSortByPrice() {
    handleSortByPrice();
  }
  function callHandleSortByBrand() {
    handleSortByBrand();   
  }

  function handleAddClick() {
    addCar();
  }
  return (
    <div className="filter-container">
      <div className="filter-container-left">
        <Button className="filter-button" onClick={() => callHandleSortByPrice()}>
          <FontAwesomeIcon
            className="font-awesome-icon"
            icon={
              priceSortType === "Price High To Low"
                ? faSortAmountDown
                : faSortAmountUp
            }
          />
          {priceSortType === "Price High To Low"
            ? "Price High To Low"
            : "Price Low To High"}
        </Button>
        <Button className="filter-button" onClick={() => callHandleSortByBrand()}>
          <FontAwesomeIcon
            className="font-awesome-icon"
            icon={brandSortType === "A to Z" ? faSortAlphaDown : faSortAlphaUp}
          />
          {brandSortType === "A to Z" ? "A to Z" : "Z to A"}
        </Button>

        <Button className="filter-button hidden-add-btn" onClick={() => handleAddClick()}>
          <FontAwesomeIcon icon={faPlus} /> Add Advertisement
        </Button>
      </div>

      <div className="filter-container-right visible-add-btn">
        <Button className="filter-button" onClick={() => handleAddClick()}>
          <FontAwesomeIcon icon={faPlus} /> Add Advertisement
        </Button>
      </div>
    </div>
  );
}
