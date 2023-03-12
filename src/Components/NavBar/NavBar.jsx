import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  
  const handleLogin = () => {
    setLoggedIn(true);
    setUserName("Fida");
  }
  
  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
  }
  
  return (
    <nav className="navbar" style={{ borderBottom: "2px solid #4B49AC", backgroundColor: "#98BDFF" }}>
      <div className="navbar-logo">
        <span className="fw-bold titleFont" style={{ fontSize: "2rem", color: "#4B49AC", fontWeight: "bolder" }}>
          GhauriTown 
        </span>
        <span className="fw-bold text-secondary titleFont" style={{ fontSize: "1rem", color: "#4B49AC", display: "block" }}>
          WaterAdministration
        </span>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>
      {loggedIn ? (
        <div className="navbar-buttons">
          <p>{userName}</p>
          <button className="btn" onClick={handleLogout} style={{ backgroundColor: "#4B49AC" }}>
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-buttons">
          <button className="btn" onClick={handleLogin} style={{ backgroundColor: "#4B49AC" }}>
            Login
          </button>
        </div>
      )}
      <Outlet />
    </nav>
  )
}

export default NavBar;
