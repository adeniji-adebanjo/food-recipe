import React from "react";
import logo from "../../images/food-lab.png";
import { Link } from "react-router-dom";
import Buttons from "../buttons/Buttons";
import "./nav-bar.css";

const NavBar = () => {
  const handleDownload = () => {
    console.log("Sign Up button clicked!");
    // Logic for sign up functionality
  };
  const handleSignUp = () => {
    console.log("Sign Up button clicked!");
    // Logic for Download functionality
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="menu-items">
            <Link to="/events">Events</Link>
            <Link to="/community">Community</Link>
            <Link to="/videos">Videos</Link>
            {/* <a href="/">Explore</a>
            <a href="/">Events</a>
            <a href="/">Community</a>
            <a href="/">Videos</a> */}
          </div>

          <Buttons text="Download" onClick={handleDownload} />
          <Buttons text="Sign Up" onClick={handleSignUp} />
        </nav>
      </header>
    </>
  );
};

export default NavBar;
