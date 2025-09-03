import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const Home = () => {
  return (
    <>
      <Layout>
      <div id="home">
        <Section1 />
      </div>
      <div id="about">
        <Section2 />
      </div>
      <div id="menu">
        <Section3 />
      </div>
      <Section4/>
      <div id="shop">
        <Section5 />
      </div>
      <div id="blog">
        <Section6 />
      </div>
      <div id="contact">
        <Section7 />
      </div>
    </Layout>
    </>
  );
};

export default Home;
