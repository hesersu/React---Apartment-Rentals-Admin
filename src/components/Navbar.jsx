import React from "react";
import logoImage from "../images/house-logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logoImage} alt="logo" className="logoImage" />
      <h3>Kris Apartment Rental</h3>
    </div>
  );
};

export default Navbar;
