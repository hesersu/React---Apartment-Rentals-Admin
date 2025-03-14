import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side">
      <ul>
        <li>
          <Link className={"link-styles"} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={"link-styles"} to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
