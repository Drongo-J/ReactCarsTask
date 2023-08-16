import React from "react";
import './Shop.css'
import ShopHeader from "../ShopHeaderComponent/ShopHeader";

export default function Shop() {
  return (
    <div className="shop-container">
      <div className="shop-cover">
        <img src="https://media.aykhan.net/assets/images/step-it-academy/react/task6/rh-autosalon.png" alt="Shop"></img>
      </div>

      <ShopHeader></ShopHeader>
    </div>
  );
}

