import React from "react";

const Hero = () => {
  // const overlayStyle = {
  //   content: '""',
  //   position: "absolute", // Position it over the background image
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: "rgba(0, 0, 0, 0.7)", // Slightly darker overlay for better contrast
  //   zIndex: 1, // Ensure it's on top of the image but below the text
  // };

  const textContainerStyle = {
    position: "relative",
    zIndex: 2, // Ensure the text appears on top of the overlay
    color: "#FACF15", // Yellow text color for contrast
  };

  const paraStyle = {
    position: "relative",
    zIndex: 2, // Ensure the text appears on top of the overlay
    color: "white", // Black text color for contrast
    // fontWeight: "bold",
  };

  return (
    <>
      <div className="flex bg-gray-700 h-[20rem]  flex-col justify-center items-center py-16 px-6 bg-cover bg-center relative">
        {/* <div style={overlayStyle}></div> */}
        <h1
          style={textContainerStyle}
          className="text-4xl max-[600px]:text-[1.2rem] font-bold text-center mb-4"
        >
          About Srinivasa Earth Movers
        </h1>
        <p
          style={paraStyle}
          className="text-lg font-semibold max-[600px]:text-[0.8rem]  text-center max-w-3xl"
        >
          A family-owned and operated company with a long and rich history,
          Srinivasa Earth Movers is committed to providing quality
          cost-effective solutions for our clients in Bangalore and throughout
          Karnataka. Offering more than 45 years of industry experience, we’re
          the first choice for all your excavation and demolition needs.
        </p>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center h-[28.5rem]"
        style={{
          backgroundImage: `url('Excavator.jpg')`,
          opacity: 0.1, // Adjust opacity as needed
        }}
      />
    </>
  );
};

export default Hero;
