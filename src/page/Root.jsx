import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Ui/Navbar";
import Footer from "../Components/Ui/Footer";
import FloatingButtons from "../Components/Ui/FloatingButtons";
import useScrollTop from "../Components/Ui/ScrollTop";

const Root = () => {
  // useEffect(() => {
    // useScrollTop();
  // }, []);
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Root;
