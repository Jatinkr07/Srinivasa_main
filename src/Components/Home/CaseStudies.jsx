import React from "react";

const caseStudies = [
  {
    image: "Picture6.jpg",
    category: "Construction",
    title: "Modern Urban Complex",
  },
  {
    image: "Picture7.jpg",
    category: "Infrastructure",
    title: "High-Rise Commercial Tower",
  },
  {
    image: "Picture8.jpg",
    category: "Construction",
    title: "Sustainable Residential Development",
  },
  {
    image: "Picture11.jpg",
    category: "Infrastructure",
    title: "Bridge Engineering Project",
  },
  {
    image: "Picture12.jpg",
    category: "Construction",
    title: "Industrial Facility Expansion",
  },
];

const CaseStudies = () => {
  return (
    <div className="relative h-[300px] max-[600px]:h-[10rem] mt-10 w-full overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-5  opacity-70">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-cover bg-center h-full "
            style={{ backgroundImage: `url(${study.image})` }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex md:flex-row md:justify-between flex-col justify-center items-center h-full text-white text-center bg-black bg-opacity-50 p-4 max-[600px]:p-2 md:p-8">
        <h1 className="text-3xl  md:text-4xl max-[600px]:text-lg font-bold mb-4">
          Discover Our Portfolio of Completed Projects
        </h1>

        <a
          href="/projects"
          className="px-4 max-[600px]:text-sm py-2 md:px-6 md:py-3 bg-[#FFE31A] text-black rounded-full font-bold transition duration-300"
        >
          Explore Our Projects
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
