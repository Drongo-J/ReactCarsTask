import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-up">
        <div className="container">
          <a href="#">Rules</a>
          <a href="#">User agreement</a>
          <a href="#">Privacy policy</a>
          <a href="#">Law</a>
        </div>
      </div>
      <div className="footer-down">
        Copyright © Aykhan Ahmadzada 2023 - 
        <a href="https://aykhan.net" target="blank">
           aykhan.net
        </a>
      </div>
    </footer>
  );
}
