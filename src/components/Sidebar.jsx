import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side">
      <Link className={"link-styles"} to="/">
        Home
      </Link>
      <Link className={"link-styles"} to="/about">
        About
      </Link>
      <h3 className="quote">Home is where the heart is</h3>
    </div>
  );
};

export default Sidebar;
