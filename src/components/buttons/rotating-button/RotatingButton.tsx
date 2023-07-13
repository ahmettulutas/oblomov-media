import React from "react";
import "./rotating-button.css";

export const RotatingButton = () => (
  <div className="wrapper">
    <div className="btn">
      <div className="side default-side">Hover Me!</div>
      <div className="side hover-side">Good Job!</div>
    </div>
  </div>
);
