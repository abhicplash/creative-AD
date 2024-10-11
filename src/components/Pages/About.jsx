import React from "react";
import Layout from "../Layout/Layout";
import AboutOpinion from "../Layout/AboutOpinion";
import "../Layout/AboutOpinion.css";

const About = () => {
  return (
    <Layout>
      <div className="pagetopabout">
        <div className="aboutpageshadow" />
        <h1>About Us</h1>
      </div>
      <AboutOpinion />
    </Layout>
  );
};

export default About;
