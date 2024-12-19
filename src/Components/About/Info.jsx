import React from "react";

const Info = () => {
  return (
    <div className="w-full py-8  max-[600px]:py-2">
      <div className="p-8 text-center bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-4xl  max-[600px]:text-xl  max-[600px]:mb-2 font-extrabold text-yellow-500 mb-6">
          Overview of Our Services
        </h2>
        <p className="text-lg  max-[600px]:text-[0.8rem]  max-[600px]:mb-2 text-black mb-6">
          We are committed to providing high-quality services and tailor-made
          solutions to meet the unique needs of our clients.
        </p>
        <p className="text-lg  max-[600px]:text-[0.8rem]  text-black">
          Contact us today to discuss your project requirements and let us
          assist you in achieving your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left section: Overview */}
        {/* <div
          className="lg:col-span-1 bg-black bg-opacity-60 text-white flex flex-col justify-center p-8 h-[450px] lg:h-[550px]"
          style={{
            backgroundImage:
              'url("https://kasturiearthmovers.com/wp-content/uploads/2018/03/Future-In-Construction-Background-Image.png?id=2032")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-4xl font-extrabold mb-6">
            Overview of our services
          </h2>
          <p className="mb-6">
            We are committed to providing high-quality services and tailor-made
            solutions to meet the unique needs of our clients.
          </p>
          <p>
            Contact us today to discuss your project requirements and let us
            assist you in achieving your goals.
          </p>
        </div> */}

        {/* Right section: Services */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Earth Movers */}
          <div className="relative group h-[450px] lg:h-[550px]">
            <img
              src="https://kasturiearthmovers.com/wp-content/uploads/2023/07/earhmoers.png" // replace with actual image path
              alt="Earth Movers"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl  max-[600px]:text-xl font-bold text-yellow-500">Earth Movers</h3>
              <p className="text-white mt-4  max-[600px]:text-[0.8rem]  max-[600px]:mt-2">
                We leverage state-of-the-art equipment and skilled operators to
                deliver precise and efficient results. Our earth-moving services
                include excavation, grading, trenching, and site preparation,
                ensuring your project is completed with the highest level of
                expertise.
              </p>
            </div>
          </div>

          {/* Infrastructure Development */}
          <div className="relative group h-[450px] lg:h-[550px]">
            <img
              src="https://kasturiearthmovers.com/wp-content/uploads/2023/07/Our-Mission-Image-2.jpg" // replace with actual image path
              alt="Infrastructure Development"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl  max-[600px]:text-xl font-bold text-yellow-500">
                Infrastructure Development
              </h3>
              <p className="text-white  max-[600px]:text-[0.8rem]  max-[600px]:mt-2 mt-4">
                We specialize in developing robust infrastructure, including
                road construction, bridge building, drainage systems, and
                utility installations, to support and enhance your project's
                foundation.
              </p>
            </div>
          </div>

          {/* Land Development */}
          <div className="relative group h-[450px] lg:h-[550px]">
            <img
              src="https://kasturiearthmovers.com/wp-content/uploads/2023/07/Our-Mission-Image-3.jpg" // replace with actual image path
              alt="Land Development"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl max-[600px]:text-xl font-bold text-yellow-500">
                Land Development
              </h3>
              <p className="text-white mt-4  max-[600px]:text-[0.8rem]  max-[600px]:mt-2">
                Our land development services focus on transforming raw land
                into optimized spaces tailored for residential, commercial, and
                industrial purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
