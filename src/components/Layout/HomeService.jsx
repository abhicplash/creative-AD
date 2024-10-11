import React from "react";
import ServiceCard from "./ServiceCard";
import "./HomeService.css";
import { Link } from "react-router-dom";
import { homeserviceList } from "../../utils/homeservice";

const HomeService = () => {
  return (
    <div className="HomeService-container">
      <span className="home-servicehead">OUR SERVICES</span>
      <span className="home-serviceHeadmain">
        Crafting Digital Masterpieces, Tailored to You
      </span>
      <div className="service-card-list">
        {homeserviceList.map(list =>
          <ServiceCard image={list.image} service={list.service} />
        )}
      </div>
      <Link to={"/services"}>
        <button>view more</button>
      </Link>
    </div>
  );
};

export default HomeService;
