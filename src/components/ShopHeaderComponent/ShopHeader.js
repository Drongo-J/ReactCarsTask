import React from "react";
import "./ShopHeader.css";
import cars from "../../data/cars";

export default function ShopHeader() {
  return (
    <div className="shop-header">
      <div className="shop-header-left">
        <div className="shop-logo"></div>
        <a className="shop-products-count" href="/">
          {cars.length} Advertisement
        </a>
      </div>

      <div className="shop-header-right">
        <div className="shop-header-text">
          <h1 className="shop-title">
            <a href="https://turbo.az/avtosalonlar/avtosalon-rh">
              Avtosalon "RH"
            </a>
          </h1>
          <div className="shop-header-table">
            <div className="shop-header-cell shop-header-cell_description">
              <div className="shop-views">
                <img
                  className="eye-img"
                  src="https://media.aykhan.net/assets/images/step-it-academy/react/task6/eye.png"
                ></img>
                23 184
              </div>
              <h2 className="shop-description">
                Avtomobillərin nağd və kreditlə alqı-satqısı və barteri.
                Avropadan istənilən avtomobillərin ən cəlbedici qiymətlərlə
                çatdırılması.
              </h2>
              <div className="shop-location-wrap">
                <img
                  className="location-img"
                  src="https://media.aykhan.net/assets/images/step-it-academy/react/task6/location.png"
                  alt="Location"
                ></img>
                <a
                  target="blank"
                  className="shop-location"
                  href="https://www.google.com/maps?q=40.408569%2C49.824268&amp;ll=40.408569%2C49.824268&amp;z=15"
                >
                  Bakı ş., Binəqədi r., Z.Bünyadov pr. 1B
                </a>
              </div>
            </div>
            <div className="shop-header-cell shop-header-cell_feedback">
              <div className="shop-phones">
                <img
                  className="phone-img"
                  src="https://media.aykhan.net/assets/images/step-it-academy/react/task6/phone.png"
                  alt="Phone"
                ></img>
                <div className="shop-phones-i">
                  <a className="shop-phones--number" href="tel:(055) 378-91-91">
                    (055) 378-91-91
                  </a>
                </div>
                <div className="shop-phones-i">
                  <a className="shop-phones--number" href="tel:(070) 378-91-91">
                    (070) 378-91-91
                  </a>
                </div>
                <div className="shop-phones-i" id="deleduz-helper">
                  <a className="shop-phones--number" href="tel:(070) 378-91-91">
                    (050) 378-91-91
                  </a>
                </div>
              </div>
              <div className="shop-phones-i" id="deleduz">
                <a className="shop-phones--number" href="tel:(070) 378-91-91">
                  (050) 378-91-91
                </a>
              </div>
              <div className="item">
                <div className="shop-schedule">
                  <img
                    alt="clock"
                    className="clock-img"
                    src="https://media.aykhan.net/assets/images/step-it-academy/react/task6/clock.png"
                  ></img>
                  Hər gün: 09:00–19:00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-special-offer">
          <img
            className="star-img"
            src="https://media.aykhan.net/assets/images/step-it-academy/react/task6/star.png"
            alt="Star"
          ></img>
          İlkin ödəniş 25%-dan başlayaraq sərfəli kredit və lizinq şərtləri
        </div>
      </div>
    </div>
  );
}
