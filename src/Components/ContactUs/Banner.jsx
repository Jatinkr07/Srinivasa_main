import React from "react";
import Container from "../Global/Container";

const Banner = () => {
  return (
    <>
      <div
        className="relative w-full h-[200px]"
        style={{
          backgroundImage: "url(eXCA.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

        <Container>
          <div className="flex flex-col text-white relative items-start justify-center h-full">
            <h2 className="text-[30px] text-yellow-500 max-[600px]:text-[1.2rem] font-bold">
              Contact Us
            </h2>
            <p className="text-white font-bold max-[600px]:text-[0.8rem]">
              Home &gt; Contact Us
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
