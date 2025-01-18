import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "/src/assets/images/fxna-logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      {location.pathname === "/dashboard" ? (
        <div className="one-hour-marketer-title">
          The One-Hour Marketer
        </div>
      ) : (
        <Link to="/" className="fxna-link">
          <img src={logo} alt="Logo" className="fxna-logo" />
          FXNA
        </Link>
      )}
    </nav>
  );
};

export default Navbar;