import React from "react";
import Food1 from "../../images/trending/food.jpg";
import Chicken from "../../images/chickenTikka.png";
import { FaCalendarAlt } from "react-icons/fa";
// import "./trending.css";

const Trending = () => {
  return (
    <>
      <div className="container my-3 ">
        <div className="row">
          <div className="col-lg col-md-6 col-sm-6">
            <div className="card bg-image" style={{ maxWidth: "22rem" }}>
              <img src={Food1} className="w-100" alt="food" />
              {/* <FaCalendarAlt /> */}
              <div
                className="card-img-overlay mask text-light justify-content-start text-start top-50"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                {" "}
                <h4>Chicken and Chips</h4>
                <p className="m-0">by Chef Tola Adele</p>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-6 col-sm-6">
            <div className="card bg-image" style={{ maxWidth: "22rem" }}>
              <img src={Food1} className="w-100" alt="food" />
              {/* <FaCalendarAlt /> */}
              <div
                className="card-img-overlay mask text-light justify-content-start text-start top-50"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                {" "}
                <h4>Chicken and Chips</h4>
                <p className="m-0">by Chef Tola Adele</p>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-6 col-sm-6">
            <div className="card bg-image" style={{ maxWidth: "22rem" }}>
              <img src={Food1} className="w-100" alt="food" />
              {/* <FaCalendarAlt /> */}
              <div
                className="card-img-overlay mask text-light justify-content-start text-start top-50"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                {" "}
                <h4>Chicken and Chips</h4>
                <p className="m-0">by Chef Tola Adele</p>
              </div>
            </div>
          </div>
          <div className="col-lg col-md-6 col-sm-6">
            <div className="card bg-image" style={{ maxWidth: "22rem" }}>
              <img src={Food1} className="w-100" alt="food" />
              {/* <FaCalendarAlt /> */}
              <div
                className="card-img-overlay mask text-light justify-content-start text-start top-50"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                {" "}
                <h4>Chicken and Chips</h4>
                <p className="m-0">by Chef Tola Adele</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
