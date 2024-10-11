import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({service,image}) => {
  return (
    <div className="s-card-container">
      <div className="s-card">
        <img src={image} alt="image" />
        <div className="card-name">
            <h3>{service}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
