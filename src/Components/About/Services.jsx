import React from "react";

const services = [
  {
    title: "Our Expertise",
    description:
      "We have honed our expertise and developed a deep understanding of the intricacies of earth movers, infrastructure development, and land development.",
  },
  {
    title: "Company Overview",
    description:
      "Srinivas Earth Movers is a renowned and trusted provider of comprehensive services in the fields of earth movers and mining services.",
  },
  {
    title: "Quality and Innovation",
    description:
      "At Srinivas Earth Movers, quality and innovation are at the core of everything we do. We maintain stringent quality standards throughout our processes.",
  },
  {
    title: "Client Satisfaction",
    description:
      "Throughout our journey, client satisfaction has remained our top priority. We have built strong and lasting relationships with our clients.",
  },
  {
    title: "Our Commitment",
    description:
      "We are committed to excellence in every aspect of our work. From the initial planning stages to the final execution, we prioritize quality and safety.",
  },
  {
    title: "Our Experience",
    description:
      "If your company has been providing services for 10 years, it’s a significant milestone that demonstrates your experience and expertise in the industry.",
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12  max-[600px]:py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-yellow-50 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <div className=" text-[24px] text-yellow-500  max-[600px]:text-xl  max-[600px]:mb-2 font-bold mb-4">
              {service.title}
            </div>
            <p className="text-black mb-6  max-[600px]:text-[0.8rem]  max-[600px]:mb-2">
              {service.description}
            </p>
            <div className="absolute top-0 right-0 mr-4 mt-4">
              <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full w-10 h-10 shadow-md">
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
