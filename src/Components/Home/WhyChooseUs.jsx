import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experience and Expertise",
      content:
        "With years of industry experience, we bring valuable knowledge and expertise to each project. Our team consistently delivers high-quality results on time and within budget.",
      image:
        "https://kasturiearthmovers.com/wp-content/uploads/2023/07/idea-02-1.png?id=3450",
    },
    {
      title: "Comprehensive Services",
      content:
        "We provide a wide range of services, including earthmoving and infrastructure development. Our holistic approach ensures that all your project needs are met under one roof.",
      image:
        "https://kasturiearthmovers.com/wp-content/uploads/2023/07/medeal-2.png?id=3451",
    },
    {
      title: "Timely Delivery",
      content:
        "We prioritize timely project completion. Our team employs efficient planning and streamlined processes to ensure deadlines are met without compromising quality.",
      image:
        "https://kasturiearthmovers.com/wp-content/uploads/2023/07/globe-1-1-1.png?id=3454",
    },
    {
      title: "Skilled Team",
      content:
        "Our team consists of highly trained professionals across various fields. Each member is committed to ensuring the success of every project with precision and expertise.",
      image:
        "https://kasturiearthmovers.com/wp-content/uploads/2023/07/trophy-1.png?id=3456",
    },
    {
      title: "Strong Reputation",
      content:
        "Srinivasa Earth Movers has built a reputation for excellence. Our commitment to quality, integrity, and customer satisfaction sets us apart in the industry.",
      image:
        "https://kasturiearthmovers.com/wp-content/uploads/2023/07/blueprint-2-1-1.png?id=3487",
    },
    {
      title: "Fleet of Machines",
      content:
        "At Srinivasa Earth Movers, we maintain a modern fleet of machines to handle a wide variety of construction projects. Our equipment ensures efficiency and precision in every job.",
      image:
        "https://kasturiearthmovers.com/wp-content/uploads/2023/07/buisnessman-1-1.png?id=3453",
    },
  ];

  return (
    <section className="py-16 max-[600px]:py-2 max-[600px]:mt-5 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl max-[600px]:text-xl font-bold text-center text-gray-800 mb-4 max-[600px]:mb-2">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 text-sm font-bold mb-12 max-[600px]:mb-4">
          Choosing Srinivasa Group for your construction and development needs
          offers numerous advantages.
        </p>

        {/* Features Grid using Grid layout */}
        <ScrollAnimation animateOnce={true} animateIn="bounceInRight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-24 max-[600px]:mt-5 p-4 max-w-screen-xl mx-auto mt-20">
            {/* Feature 1 */}
            {features.map((service, index) => (
              <div
                key={index}
                className="relative   bg-yellow-100 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300 ease-in-out"
              >
                <div className=" text-[20px] mr-5  max-[600px]:text-[1.2rem]  max-[600px]:mb-2 font-bold mb-4 text-yellow-400">
                  {service.title}
                </div>
                <p className="text-black mb-6  max-[600px]:text-[0.8rem]  max-[600px]:mb-2">
                  {service.content}
                </p>
                <div className="absolute top-0 right-0 mr-4  mt-4">
                  <div className="flex items-center  justify-center bg-yellow-200 p-2 text-white rounded-full w-10 max-[600px]:w-8 max-[600px]:h-8 h-10 shadow-md">
                    <img src={service.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WhyChooseUs;
