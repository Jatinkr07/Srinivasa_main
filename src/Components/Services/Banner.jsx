import React from "react";

const Banner = () => {
  const headerStyle = {
    backgroundImage: `url('bgImg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust height as needed
    color: "white", // Text color for contrast
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div style={headerStyle}>
      <p className="mb-2 text-lg">kasturi earth movers</p>
      <h1 className="text-5xl font-bold">Building The Future</h1>
      <p className="mt-2 text-center">
        With years of experience in the industry, we have built a solid
        reputation for our commitment <br /> to quality, attention to detail,
        and timely project completion.
      </p>
      <button className="px-10 mt-10 py-2 rounded-full bg-[#d75527]  font-[700] text-white">
        Get Quote
      </button>
    </div>
  );
};

export default Banner;
