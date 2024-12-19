import React from "react";
import Banner from "../Components/ContactUs/Banner";
import Contact from "../Components/ContactUs/Contact";
import Map from "../Components/ContactUs/Map";
import useScrollTop from "../Components/Ui/ScrollTop";

const ContactUs = () => {
  useScrollTop()
  return (
    <div className="w-full">
      <Banner />
      <Contact />
      
      <Map />
    </div>
  );
};

export default ContactUs;
