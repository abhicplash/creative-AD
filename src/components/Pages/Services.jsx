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
        <div className="service-list-container">
          {serviceList.map(item =>
            <ServiceCard image={item.image} service={item.service} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
