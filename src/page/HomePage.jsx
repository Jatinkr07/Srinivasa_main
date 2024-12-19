import React from "react";
import Banner from "../Components/Home/Banner";
import Innovation from "../Components/Home/Innovation";
import Standards from "../Components/Home/Standards";
import Services from "../Components/Home/Services";
import ContactBanner from "../Components/Home/ContactBanner";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Value from "../Components/Home/Value";
import CaseStudies from "../Components/Home/CaseStudies";
import ContactForm from "../Components/Home/ContactForm";
import Map from "../Components/Home/Map";
import Footer from "../Components/Home/Footer";
import useScrollTop from "../Components/Ui/ScrollTop";

const HomePage = () => {
  useScrollTop()
  return (
    <>
      <Banner />
      <Innovation />
      <Standards />
      <Services />
      <ContactBanner />
      <WhyChooseUs />
      <Value />
      <CaseStudies />
      <ContactForm />

      {/* <Map /> */}
    </>
  );
};

export default HomePage;
