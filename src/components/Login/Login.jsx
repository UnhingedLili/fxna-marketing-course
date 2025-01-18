import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
        <h1>
          The <br /> One-Hour <br /> Marketer
        </h1>
      
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <label htmlFor="login-input">Log in:</label>
          <input type="password" className="login-input" />
          <button type="submit" className="login-button">Log In</button>
        </form>
      ) : (
        <div className="to-dashboard">
          <label htmlFor="view-courses-link">Log in:</label>
          <Link to="/dashboard" className="view-courses-link">
            View Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;