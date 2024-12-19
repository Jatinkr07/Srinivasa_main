import React from "react";
import { useNavigate } from "react-router-dom";

const ContactBanner = () => {
  const navigate = useNavigate();
  const headerStyle = {
    backgroundImage: `url('eXCA.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white", // Text color for contrast
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    flexWrap: "wrap",
    position: "relative", // Necessary for positioning the overlay
    height: "15rem",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute", // Position it over the background image
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0, 0.5)", // Semi-transparent gray (adjust opacity)
    zIndex: 1, // Ensure it's on top of the image but below the text
  };
  const textContainerStyle = {
    position: "relative",
    zIndex: 2, // Ensure the text appears on top of the overlay
    color: "white", // Text color for contrast
    // background:"white"
  };
  const btnContainerStyle = {
    position: "relative",
    zIndex: 2, // Ensure the text appears on top of the overlay
    color: "black", // Text color for contrast
    backgroundColor: "#FACF15",
  };

  return (
    <div
      style={headerStyle}
      className="p-10 max-[600px]:p-2 max-[600px]:pt-10 mt-20 max-[600px]:mt-10"
    >
      <div style={overlayStyle}></div> {/* The overlay */}
      <div
        className="text-left text-white max-[600px]:text-center"
        style={textContainerStyle}
      >
        <h1 className="text-xl max-[600px]:text-sm flex max-[600px]:w-80 font-bold ">
          Our dedicated team is ready to assist you...
        </h1>
        <span className="font-extrabold text-4xl max-[600px]:text-xl">
          Contact With Us !
        </span>
        {/* <h1 className="text-3xl max-[600px]:text-4xl font-extrabold">
          Contact With Us !
        </h1> */}
      </div>
      <button
        onClick={() => navigate("/contact-us")}
        style={btnContainerStyle}
        className=" text-black  max-[600px]:mt-5 mx-[600px]:mb-10 p-4 max-[600px]:p-2 max-[600px]:text-[1rem] rounded-full font-bold"
      >
        Contact Now!
      </button>
    </div>
  );
};

export default ContactBanner;
