import React from "react";
import Layout from "../Layout/Layout";
import "./Services.css";
import { serviceList } from "../../utils/homeservice";
import ServiceCard from "../Layout/ServiceCard";

const Services = () => {
  return (
    <Layout>
      <div className="services-container">
        <div className="pagetopabout">
          <div className="aboutpageshadow" />
          <h1>Services</h1>
        </div>
        <div className="services-container-inline">
          <div className="servicepage-headings">
            <h4>what we offers</h4>
            <h1>we provide world class digital services</h1>
          </div>
          <div className="servicelist-wrapper">
            <div className="service-list-container">
              {serviceList.map(item =>
                <ServiceCard image={item.image} service={item.service} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
