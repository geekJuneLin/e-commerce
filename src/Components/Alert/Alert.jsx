import React from "react";
import "./style.css";

export default function Alert() {
  return (
    <div className="black-container">
      <div className="alert-section">
        <h1>Are your sure?</h1>
        <div className="alert-content">
          <p>
            You are about to clear entire cart. Are you sure you want to do
            this?
          </p>
          <div className="btns">
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}
