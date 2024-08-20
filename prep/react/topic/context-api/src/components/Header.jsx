import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <navbar className="navbar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/help">
            <li>Help</li>
          </Link>
        </ul>
      </navbar>
    </div>
  );
};

export default Header;
