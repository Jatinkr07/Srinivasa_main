import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp} from "react-icons/io5"

const FloatingButtons = () => {
  // Helper function to determine the className based on the current path
  const getButtonClasses = () => {
    if (window.location.pathname.includes("/services")) {
      return "fixed right-10 top-[80%] max-[600px]:right-[2rem] max-[600px]:top-[80%] z-[999] space-y-4";
    } else if (
      window.location.pathname.includes("/about-us") ||
      window.location.pathname.includes("/machineries")
    ) {
      return "fixed right-10 top-[80%] max-[600px]:right-[2rem] max-[600px]:top-[75%] z-[999] space-y-4";
    } else {
      return "fixed right-10 top-[75%] max-[600px]:right-[2rem] max-[600px]:top-[80%] z-[999] space-y-4";
    }
  };

  return (
    <div className={getButtonClasses()}>
      {/* First Call Button */}
      <a href="tel:+919035379994">
        <IoIosCall className="bg-blue-500 text-white text-[4rem] max-[600px]:text-[2rem] max-[600px]:p-2 rounded-full p-4 cursor-pointer hover:scale-105 transition-all" />
      </a>

      {/* Second WhatsApp Button */}
      <a href="https://wa.me/+919035379994">
        <IoLogoWhatsapp className="bg-green-500 mt-5 text-white text-[4rem] max-[600px]:text-[2rem] max-[600px]:p-2 rounded-full p-1  cursor-pointer hover:scale-105 transition-all" />
      </a>
    </div>
  );
};

export default FloatingButtons;
