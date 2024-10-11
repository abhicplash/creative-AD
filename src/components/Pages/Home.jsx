import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Layout/Banner";
import HomeService from "../Layout/HomeService";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <HomeService />
    </Layout>
  );
};

export default Home;
