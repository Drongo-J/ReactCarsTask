import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header up">
        <div className="container">
          <div className="container-left">
            <a href="https://tap.az">Tap.az</a>
            <a href="https://bina.az">Bina.az</a>
            <a href="https://boss.az">Boss.az</a>
          </div>

          <div className="container-right">
            Support: <span className="phone-number">(099) 906-66-44</span>
            <a href="#">Help</a>
            <a href="#">RU</a>
            <a href="#">
              <img
                src="https://media.aykhan.net/assets/images/step-it-academy/react/task6/heart.png"
                alt="Heart"
              ></img>
              Selected
            </a>
            <a href="#">
              <img
              id="login-image"
                src="https://media.aykhan.net/assets/images/step-it-academy/react/task6/login.png"
                alt="Heart"
              ></img>
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="header down">
        <div className="container">
          <div className="container-left">
            <a href="/#">
              <span className="brand">TURBO.AZ</span>
            </a>
            <a href="#">
              <span className="item">All Listings</span>
            </a>
            <a href="#">
              <span className="item">Car Dealerships</span>
            </a>
            <a href="#">
              <span className="item">Spare Parts and Accessories</span>
            </a>
          </div>

          <div className="container-right">
            {/* <button>
              <img
                src="https://media.aykhan.net\assets\images\step-it-academy\react\task6/add.png"
                alt="Add"
              ></img>
              New Advertisement
            </button> */}
          </div>
        </div>
      </div>

    </header>
  );
}
