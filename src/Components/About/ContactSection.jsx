import Container from "../Global/Container";
import React from "react";

const ContactSection = () => {
  return (
    <div
      className="w-full py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://kasturiearthmovers.com/wp-content/uploads/2023/07/kasturi-earthmovers-1.png?id=3765")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full my-10 text-left text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Text Section */}
          <div className="md:w-2/3">
            <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight">
              Looking For Exclusive Construction Service?
            </h3>
            <p className="text-sm sm:text-base md:text-lg mt-5 mb-8">
              kasturi earth movers is an established and reputable
              organization with a strong track record of providing high-quality
              services in the fields of earth movers, infrastructure
              development, and land development.
            </p>
          </div>

          {/* Button Section */}
          {/* <button className="rounded-full bg-white text-black px-8 py-3 font-semibold text-sm sm:text-base hover:bg-gray-200 transition-all duration-300">
            Our History
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
