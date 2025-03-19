import React from "react";
import logoImage from "../images/house-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img src={logoImage} alt="logo" className="logoImage" />
      </Link>
      <h3>Kris Apartment Rental</h3>
    </div>
  );
};

export default Navbar;
