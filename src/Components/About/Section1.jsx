import React from "react";

const Section1 = () => {
  return (
    <section className="w-full  bg-gray-600  relative">
      <div className="w-[100%]">
        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          <div className="md:w-1/2  bg-opacity-80 p-6 rounded-lg">
            <h2 className="text-3xl  max-[600px]:text-lg font-bold text-yellow-300 mb-4">
              Srinivasa Earth Movers: Prioritizing What Matters To You
            </h2>
            <p className="text-white font-semibold max-[600px]:text-[0.8rem] leading-relaxed">
              Srinivasa Earth Movers is fully-bonded and fully-insured. We don’t
              believe in giving our valued clients the runaround and take pride
              in our exceptional level of customer service. Our experience and
              professionalism mean you will always get the best result.
            </p>
            <p className="mt-6 max-[600px]:mt-3 text-white font-semibold max-[600px]:text-[0.8rem] leading-relaxed">
              Whether we join your team during preconstruction or just before
              breaking ground, we help you prioritize your needs to match your
              schedule and budget. You benefit from our knowledge and experience
              so that before we do any digging, you already know how the project
              will end.
            </p>
            <p className="mt-6 max-[600px]:mt-3 text-white font-semibold max-[600px]:text-[0.8rem] leading-relaxed">
              We have been serving our clients with dedication and expertise for
              several years. Whether we’re creating immaculately paved roads and
              parking lots, spot-on grading for athletic fields, dependable
              foundations for massive wind turbines, or anything in between,
              Srinivas Earth Movers is ready to deliver “groundbreaking” results
              that exceed your expectations.
            </p>
            <p className="mt-6 max-[600px]:mt-3 text-white font-semibold max-[600px]:text-[0.8rem] leading-relaxed">
              Srinivasa Earth Movers has built relationships with general
              contractors, developers, and private organizations. No matter the
              size or scope of your project, we are the excavating company that
              does sitework accurately and with integrity.
            </p>
            <ul className="text-white font-semibold max-[600px]:text-[0.8rem] max-[600px]:mt-4 leading-relaxed list-disc mt-10">
              <li>
                Well maintained fleet – means no breakdowns, able to complete
                the job
              </li>
              <li>Highly skilled operators</li>
              <li>Service both residential and commercial clients</li>
              <li>Outstanding customer support</li>
              <li>Fully insured</li>
              <li>Provide hourly rate services</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('Image1.jpeg')`,
          opacity: 0.1, // Adjust opacity as needed
        }}
      />
    </section>
  );
};

export default Section1;
