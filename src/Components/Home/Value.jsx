import React from "react";
import CountUp from "react-countup";

function Value() {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between ">
      {/* Left Section (Text) */}
      <div className="w-full h-[32rem] max-[500px]:w-full max-[600px]:h-full max-[600px]:mb-0 md:w-1/2 bg-white   opacity-90 border-2 p-12  mb-6 max-[500px]:mb-1 md:mb-0 ">
        <div className="text-left space-y-6 bg-opacity-70">
          <h1 className="text-4xl max-[600px]:text-lg font-bold text-black">
            Quality Earthmovers, Enduring Value
          </h1>
          <div className="h-1 w-12 bg-orange-500 mb-4 "></div>
          <p className="text-lg max-[600px]:text-sm text-black font-semibold">
            At Srinivasa Earth Movers, we pride ourselves on being the leading
            provider of comprehensive earthmoving and land development
            solutions.
          </p>
          <p className="text-lg max-[600px]:text-sm text-black font-semibold">
            With years of experience in the industry, we have earned a
            reputation for delivering exceptional results and exceeding our
            clients’ expectations.
          </p>

          {/* Statistics */}
          <div className="flex flex-wrap justify-around mt-6">
            <div className="text-center">
              <h2 className="text-4xl max-[600px]:text-2xl  font-bold text-black">
                <CountUp end={10} duration={5} />
              </h2>
              <p className="text-black font-bold max-[600px]:text-md max-[600px]:mb-4">YEARS OF EXPERIENCE</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl max-[600px]:text-2xl  font-bold text-black">
                <CountUp end={25} duration={5} />
              </h2>
              <p className="text-black font-bold max-[600px]:text-md max-[600px]:mb-4">SUCCESSFUL PROJECTS</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl max-[600px]:text-2xl  font-bold text-black">
                <CountUp end={60} duration={5} />
              </h2>
              <p className="text-black font-bold max-[600px]:text-md max-[600px]:mb-4">Machines & Equipment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full max-[500px]:w-full  md:w-1/2 ">
        <img
          src="Quality-earthmovers.jpg"
          alt="Excavator"
          className="w-full h-[32rem] max-[600px]:h-[15rem] object-cover "
        />
      </div>
    </div>
  );
}

export default Value;
