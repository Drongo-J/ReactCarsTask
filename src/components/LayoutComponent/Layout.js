// Layout.js
import React from "react";
import Header from "../HeaderComponent/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer />
    </div>
  );
};

export default Layout;
