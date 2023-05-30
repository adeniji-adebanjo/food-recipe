import React from "react";
import "./hero.css";
import Egusi from "../../images/recipes/food1.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-img">
          <img src={Egusi} alt="hero-bg" />
        </div>
        <div className="hero-text">
          <p>
            Share your passion for cooking with world{" "}
            <span>-one recipe at a time</span>
          </p>
          <input
            type="search"
            id="search"
            placeholder="Dish, Ingridents, Keywords"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
