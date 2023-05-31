import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
// import "./meal-planner.css";

const MealPlanner = () => {
  return (
    <>
      <div
        className="meal-planner"
        style={{
          backgroundColor: "#a98165",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "50px",
        }}
      >
        <div
          className="meal-text"
          style={{ margin: "20px", fontSize: "30px", color: "#ffff" }}
        >
          <h4>Free Meal Planner and Food Tracker</h4>
        </div>
        <div
          className="meal-icon"
          style={{ margin: "20px", fontSize: "150px", color: "#ffff" }}
        >
          <FaCalendarAlt />
        </div>
      </div>
    </>
  );
};

export default MealPlanner;
