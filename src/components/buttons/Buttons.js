import React from "react";
import "./buttons.css";

const Buttons = ({ text, onClick }) => {
  return (
    <>
      {/* <div className="buttons">
        <button className="download">Download App</button>
        <button className="signup">Sign up</button>
      </div> */}
      <button onClick={onClick}>{text}</button>
    </>
  );
};

export default Buttons;
