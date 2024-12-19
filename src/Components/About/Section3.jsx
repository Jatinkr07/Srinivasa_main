import React from "react";

import img1 from "../../assets/about/one.png";
import img2 from "../../assets/about/two.png";
import img3 from "../../assets/about/three.png";

const Section3 = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 max-[600px]:py-4 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl max-[600px]:text-lg font-bold text-yellow-400">
          Providing Quality Services From 10 Years!
        </h2>
        <p className="mt-4 max-[600px]:text-[0.8rem] text-lg text-black">
          Srinivasa Earth Movers has been offering services for 10 years,
          marking an important milestone that reflects our extensive experience
          and expertise in the industry.
        </p>
      </div>

      {/* Image and Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* First Image and Text */}
        <div className="text-center bg-yellow-50 p-2 rounded shadow-lg">
          <img
            src={img1} // Replace with actual image path
            alt="Construction team"
            className="w-full h-64 object-cover"
          />
          <h3 className="text-xl max-[600px]:text-lg font-semibold mt-4 text-yellow-500">Property Improvement</h3>
          <p className="mt-2 max-[600px]:text-[0.8rem] text-black">
            Whether you are enhancing your home with landscaping and a swimming
            pool, or you’re the head of a commercial project development,
            Srinivas Earth Movers can help you get it done on time and on budget. 
          </p>
        </div>

        {/* Second Image and Text */}
        <div className="text-center bg-yellow-50 p-2 rounded shadow-lg">
          <img
            src={img2} // Replace with actual image path
            alt="Client Satisfaction"
            className="w-full h-64 object-cover"
          />
          <h3 className="text-xl  max-[600px]:text-lg font-semibold mt-4 text-yellow-500">Professional Operators</h3>
          <p className="mt-2  max-[600px]:text-[0.8rem] text-black">
            Every one of our operators is highly trained and has the experience
            to complete your project to the highest standard. We are always on
            time so you don’t have to worry about blowing out your construction
            project budget.
          </p>
        </div>

        {/* Third Image and Text */}
        <div className="text-center bg-yellow-50 p-2 rounded shadow-lg">
          <img
            src={img3} // Replace with actual image path
            alt="Expert team"
            className="w-full h-64 object-cover"
          />
          <h3 className="text-xl  max-[600px]:text-lg font-semibold mt-4 text-yellow-500">
            What You See is What You Get
          </h3>
          <p className="mt-2  max-[600px]:text-[0.8rem] text-black">
            When you work with Srinivas Earth Movers, what you see is what you
            get. You won’t have any unvetted subcontractors showing up to your
            site because we deal directly with the client. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
