import React from "react";
import Banner from "../Components/About/Banner";
import Services from "../Components/About/Services";
import Info from "../Components/About/Info";
import Section3 from "../Components/About/Section3";
import Section1 from "../Components/About/Section1";
import Section2 from "../Components/About/Section2";
import ContactSection from "../Components/About/ContactSection";
import useScrollTop from "../Components/Ui/ScrollTop";
import Hero from "../Components/About/Hero";

const About = () => {
  useScrollTop();
  return (
    <div className="w-full">
      {/* <Banner /> */}
      {/* <Section1 /> */}
      <Hero />
      <Section2 />
      <Section3 />
      <Info />
      <Services />
      {/* <ContactSection /> */}
    </div>
  );
};

export default About;
