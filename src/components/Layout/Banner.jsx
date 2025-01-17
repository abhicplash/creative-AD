import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="bannershadow" />
      <div className="banner-Details">
        <div className="heading">
          Your Partner for End-to-End Advertising Solutions
        </div>
        <span className="paradetails">
          Unlock Your Brand's Potential with Creative Signature Advertisement,
          Sharjah & Dubai's Leading Advertising Agency
        </span>
        <button>Explore</button>
      </div>
    </div>
  );
};

export default Banner;
