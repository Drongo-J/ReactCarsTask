import Cars from "./components/CarsComponent/Cars";
import AddCar from "./components/AddCarComponent/AddCar";
import UpdateCar from "./components/UpdateCarComponent/UpdateCar";
import React, { useState } from "react";
import Filter from "./components/FilterComponent/Filter";
import Shop from "./components/ShopComponent/Shop";
import cars from "./data/cars";

export default function RouteManager() {
  const [currentRoute, setCurrentRoute] = useState("cars"); // Initial route
  const [routeDate, setRouteData] = useState(null); // Data to be sent with the route

  const handleNavigation = (route, data = null) => {
    setCurrentRoute(route);
    setRouteData(data);
  };

  function updateCar(carData) {
    handleNavigation("update-car", carData);
  }

  function addCar(carData) {
    handleNavigation("add-car", carData);
  }

  function goBack() {
    handleNavigation("cars");
  }

  const [priceSortType, setPriceSortType] = useState("Price High To Low");
  const [brandSortType, setBrandSortType] = useState("A to Z");

  function callHandleSortByPrice() {
    if (priceSortType === "Price High To Low") {
      cars.sort((a, b) => b.Price - a.Price);
      setPriceSortType("Price Low To High");
    } else {
      cars.sort((a, b) => a.Price - b.Price);
      setPriceSortType("Price High To Low");
    }
  }

  function callHandleSortByBrand() {
    if (brandSortType === "A to Z") {
      cars.sort((a, b) => a.Brand.localeCompare(b.Brand));
      setBrandSortType("Z to A");
    } else {
      cars.sort((a, b) => b.Brand.localeCompare(a.Brand));
      setBrandSortType("A to Z");
    }
  }

  switch (currentRoute) {
    case "cars":
      return (
        <div>
          <Shop></Shop>
          <Filter
            addCar={addCar}
            handleSortByPrice={callHandleSortByPrice}
            handleSortByBrand={callHandleSortByBrand}
            priceSortType={priceSortType}
            brandSortType={brandSortType}
          ></Filter>
          <Cars updateCar={updateCar}></Cars>
        </div>
      );
    case "add-car":
      return <AddCar goBack={goBack}></AddCar>;
    case "update-car":
      return <UpdateCar goBack={goBack} carData={routeDate}></UpdateCar>;
    default:
      return <Cars />;
  }
}
