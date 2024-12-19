import React from "react";
import Container from "../Global/Container";

const Banner = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage:
          'url("https://kasturiearthmovers.com/wp-content/uploads/2023/07/kasturi-earthmovers-Building-your-dreams.png")',
        backgroundPosition: "center",
        
      }}
    >
      <Container>
        <div className="flex flex-col text-white items-start justify-center h-full">
          <h2 className="text-[30px] font-[600]">Company Overview</h2>
          <p classname="text-white">Home &gt; Company Overview</p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
