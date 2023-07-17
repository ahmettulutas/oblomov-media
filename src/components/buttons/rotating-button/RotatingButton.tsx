import React from 'react';
import './rotating-button.css';

export const RotatingButton = () => {
  console.table({ 0: 'first' });
  return (
    <div className="wrapper">
      <div className="btn">
        <div className="side default-side">Hover Me!</div>
        <div className="side hover-side">Good Job!</div>
      </div>
    </div>
  );
};
