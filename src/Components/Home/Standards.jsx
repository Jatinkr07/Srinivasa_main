import React, { useEffect } from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

const Standards = () => {
  const headerStyle = {
    height: "80vh", // Adjust height as needed
    color: "white", // Text color for contrast
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    position: "relative",
  };

  const cards = [
    {
      icon: "building.png",
      title: "Earth Movers",
      para: "At kasturi Earth Movers, we provide high-quality earthmoving equipment and experienced operators to expertly manage a variety of excavation and construction projects.",
      color: "#FACF15",
      textColor: "black",
    },
    {
      icon: "infrastructure.png",
      title: "Land Development",
      para: "Our skilled team of planners and designers collaborates closely with clients to create strategic land use plans that fully optimize the potential of each site.",
      color: "black",
      textColor: "white",
    },
    {
      icon: "https://kasturiearthmovers.com/wp-content/uploads/2018/03/Building-Construction-Icon-1.png",
      title: "Infrastructure Development",
      para: "Leveraging our expertise, resources, and dedication to excellence, we carry out a diverse array of infrastructure development projects.",
      color: "#FACF15",
      textColor: "black",
    },
  ];

  useEffect(() => {
    const videoTag = document.getElementById("videoId");
    if (videoTag.muted) {
      videoTag.play();
    }
  }, []);

  return (
    <>
      {/* Background video Section */}
      <div style={headerStyle}>
        <video
          id="videoId"
          src="website-background-2.mp4" // Make sure to replace with your actual video path
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50" // Ensures the video covers the background
          loop
          autoPlay
          muted
          controls={false}
          playsInline
        ></video>

        {/* Grayish overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center text-white">
          <h1 className="text-lg max-[600px]:text-base">
            We Help Customers To Build
          </h1>
          <h1 className="text-4xl font-bold max-[600px]:text-xl">
            Elevating Construction Standards
          </h1>
        </div>
      </div>

      {/* Cards Section */}
      <ScrollAnimation animateIn="fadeIn">
        <div className="relative -mt-32 flex justify-center flex-wrap items-center w-full">
          {cards.map((elem, index) => (
            <div
              key={index}
              className={`${
                elem?.color === "#FACF15"
                  ? `bg-[${elem.color}] h-[20rem] text-${elem.textColor} shadow-lg w-[20rem] max-[600px]:w-full flex flex-col justify-center m-4 items-center p-4 z-10`
                  : elem?.color === "gray"
                  ? `bg-${elem.color}-800 h-[20rem] text-${elem.textColor} shadow-lg w-[20rem] max-[600px]:w-full flex flex-col justify-center m-4 items-center p-4 z-10`
                  : `bg-${elem.color} shadow-lg h-[20rem] text-${elem.textColor} w-[20rem] max-[600px]:w-full flex flex-col justify-center m-4 items-center p-4 z-10`
              }`}
            >
              <img
                className={`mt-5 w-[5rem] ${
                  index === 1 ? "filter invert" : ""
                }`} // Apply the invert filter to the icon of the second card
                src={elem.icon}
                alt={elem.title}
              />
              <h2 className="text-xl font-bold mt-3 max-[600px]:text-lg">
                {elem.title}
              </h2>
              <p className="w-72 text-center mt-2 max-[600px]:text-base ">
                {elem.para}
              </p>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Standards;
