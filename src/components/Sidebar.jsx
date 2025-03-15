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
    </div>
  );
};

export default Sidebar;
