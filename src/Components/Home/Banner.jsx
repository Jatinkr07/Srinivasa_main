import React, { useEffect } from "react";
import Navbar from "../Ui/Navbar";

const Banner = () => {
  useEffect(() => {
    const videoTag = document.getElementById("videoId");
    if (videoTag.muted) {
      videoTag.play();
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden top-0 lg:-mt-[137px]">
      {/* Background video */}
      <video
        id="videoId"
        playsInline
        loop
        autoPlay
        muted
        src="website-background.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Grayish overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center text-white px-4">
        <p className="mb-2 text-xl md:text-2xl font-bold">
          Srinivasa Earth Movers
        </p>
        <h1 className="text-3xl md:text-5xl font-bold">Moving your earth</h1>
        <p className="mt-2 text-base md:text-lg max-w-2xl">
          With years of experience in the industry, we have built a solid
          reputation for our commitment <br /> to quality, attention to detail,
          and timely project completion.
        </p>
      </div>
    </div>
  );
};

export default Banner;
