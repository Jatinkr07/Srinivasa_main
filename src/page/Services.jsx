import React, { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useNavigate } from "react-router-dom";
import useScrollTop from "../Components/Ui/ScrollTop";
import Section1 from "../Components/About/Section1";

const Services = () => {
  useScrollTop();
  const [activeIndex, setActiveIndex] = useState(null);
  const Navigate = useNavigate();
  const data = [
    {
      id: 1,
      img: "image012.jpg",
      title: "Soil excavation",
      link: "soilExcavation",
      description:
        "At Srinivasa Earth Movers, we specialize in soil excavation for a wide range of projects, from residential developments to large-scale commercial constructions. Our team uses state-of-the-art equipment and techniques to efficiently remove soil, ensuring that the ground is prepared to the highest standards for foundations, landscaping, and utilities installation. Whether you need to clear a site for a new home, create a level surface for roads, or dig trenches for drainage systems, we handle every job with expertise and precision, ensuring smooth progress for your project.",
    },
    {
      id: 2,
      img: "image014.png",
      title: "Rock excavation",
      link: "rockExcavation",
      description:
        "At Srinivasa Earth Movers, we excel in rock excavation, meeting the demands of large-scale infrastructure and detailed residential projects. Utilising advanced techniques like rock hammering, sawing, and grinding, we're adept at transforming challenging terrains into perfect foundations for various constructions. Whether carving out a new basement, shaping a landscape for a garden retreat, or preparing the ground for home extensions, our team tackles each task with precision and professionalism.",
    },
    {
      id: 3,
      img: "image016.jpg",
      title: "Layout site development Works",
      link: "layoutSite",
      description:
        "At Srinivasa Earth Movers, we specialize in soil layout and site development, providing essential groundwork for residential, commercial, and industrial projects. Our team expertly handles all aspects of site preparation, including grading, levelling, and contouring, ensuring the land is optimized for construction. Using advanced machinery and techniques, we efficiently shape the terrain to create stable foundations, manage drainage systems, and support infrastructure needs. Whether preparing a new housing development, setting up a commercial site, or levelling land for landscaping, we deliver precise, reliable, and high-quality results tailored to your project’s.",
    },
    {
      id: 4,
      img: "image018.jpg",
      title: "Tunnel face cutting",
      link: "tunnelFace",
      description:
        "At Srinivasa Earth Movers, we specialize in soil layout and site development, providing essential groundwork for residential, commercial, and industrial projects. Our team expertly handles all aspects of site preparation, including grading, levelling, and contouring, ensuring the land is optimized for construction. Using advanced machinery and techniques, we efficiently shape the terrain to create stable foundations, manage drainage systems, and support infrastructure needs. Whether preparing a new housing development, setting up a commercial site, or levelling land for landscaping, we deliver precise, reliable, and high-quality results tailored to your project’s.",
    },
    {
      id: 5,
      img: "https://kasturiearthmovers.com/wp-content/uploads/2023/07/1-st-image.jpg",
      title: "Road excavation",
      link: "roadExcavation",
      description:
        "At Srinivasa Earth Movers, we specialize in road excavation, delivering high-quality groundwork for both urban and rural infrastructure projects. Equipped with the latest excavation machinery and techniques, our skilled team efficiently clears and prepares the terrain for road construction, ensuring strong, durable foundations. Whether it's for highways, residential streets, or industrial access roads, we handle every phase with precision, from clearing debris to grading and leveling. Our commitment to excellence guarantees that your road construction project is completed on time, with minimal disruption, and to the highest standards of safety and performance.",
    },
    {
      id: 6,
      img: "image020.png",
      title: "Quarries operation",
      link: "quarries",
      description:
        "At Srinivasa Earth Movers, we excel in quarry operations excavation, offering comprehensive services for extracting raw materials for construction, landscaping, and industrial purposes. Our expert team is equipped with cutting-edge machinery to efficiently manage the excavation, blasting, and hauling of rock, gravel, and other materials from quarry sites. We prioritize safety, environmental responsibility, and operational efficiency to ensure smooth and sustainable quarry operations. Whether you're looking to develop a new quarry, expand an existing site, or need reliable material extraction, we keep timelines and budgets on track.",
    },
    {
      id: 7,
      img: "image022.jpg",
      title: "Pipeline trenches",
      link: "pipeline",
      description:
        "At Srinivasa Earth Movers, we specialize in pipeline trench excavation, providing reliable and efficient excavation services for utility, gas, water, and sewage pipeline installations. Our experienced team utilizes advanced equipment and techniques to create precise, stable trenches that ensure safe and seamless pipeline laying. From initial site preparation to final grading, we handle every step with accuracy and efficiency, minimizing disruptions and adhering to strict safety and environmental standards. Whether for residential, commercial, or industrial projects, we ensure your pipeline excavation is completed on time, within budget, and with the utmost precision, ensuring long-lasting infrastructure for your needs.",
    },
    {
      id: 8,
      img: "ControlledRockBlasting.mp4",
      title: "Controlled rock blasting",
      link: "controlled",
      description:
        "At Srinivasa Earth Movers, we specialize in controlled rock blasting, providing safe and precise solutions for challenging excavation projects. Using state-of-the-art blasting techniques and equipment, our expert team ensures that rock removal is done efficiently, with minimal impact on the surrounding environment. Whether it's for tunneling, foundation preparation, or site development, we handle every blast with meticulous planning and care, ensuring controlled, accurate results. Our commitment to safety, precision, and environmental responsibility ensures that your project moves forward smoothly, on time, and within budget, while maintaining the highest industry standards.Contact us today to discuss your project requirements and discover how Srinivasa Earth Movers can elevate your success through expert blasting services.",
    },
    {
      id: 8,
      img: "dumper.jpg",
      title: "Demolition Works",
      link: "demolition",
      description:
        "Srinivasa Earth Movers, your trusted partner in expert demolition services. Whether you're clearing a site for a new construction project, renovating an old building, or tackling a complex decommissioning task, we provide safe, efficient, and reliable demolition solutions. Our team of skilled professionals uses state-of-the-art equipment and industry-best practices to ensure each job is completed on time, within budget, and with minimal disruption. From residential properties to large-scale commercial projects, we handle every aspect of demolition with precision and care. Let us clear the way for your next project – contact us today for a free consultation!",
    },
    {
      id: 8,
      img: "chaindozer.jpg",
      title: "Dewatering",
      link: "dewatering",
      description:
        "Srinivasa Earth Movers is your trusted expert in dewatering solutions. We specialize in providing efficient, reliable, and cost-effective dewatering services for construction, mining, and industrial projects. Whether you're dealing with groundwater control, excavation dewatering, or flood prevention, our team uses advanced equipment and proven techniques to keep your site dry and safe. With years of experience and a commitment to environmental responsibility, we deliver tailored dewatering solutions that meet your specific needs, ensuring smooth operations and minimizing delays. Let us help you manage water challenges – contact us today for a customized dewatering plan!",
    },
    {
      id: 8,
      img: "bgImg.jpg",
      title: "Diamond Rope Cutting",
      link: "diamond",
      description:
        "Srinivasa Earth Movers is a leading company in excavation and cutting services, proudly serving the region with advanced technology and innovative solutions. Our state-of-the-art Diamond Rope Cutting Machines are designed to handle even the toughest materials with precision and efficiency. As we continue to invest in cutting-edge equipment and refine our processes, we aim to set new industry standards in safety, speed, and quality. With ongoing research and development, we are committed to enhancing our capabilities, ensuring quieter, more efficient cutting for every project. At Srinivasa Earth Movers, we're not just moving earth—we’re moving the industry forward.",
    },
  ];

  // Create a ref to the container
  const containerRef = useRef(null);

  // Function to handle the hover event on the last item
  const handleHoverLastItem = (i) => {
    console.log(i);
    setActiveIndex(i);
  };

  const handleClick = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  useEffect(() => {
    if (activeIndex == data?.length - 1) {
      if (containerRef.current) {
        // Scroll to the far right of the container using scrollLeft
        containerRef.current.scrollTo({
          left: containerRef.current.scrollWidth, // Scroll to the far right of the container
          behavior: "smooth", // Smooth scrolling effect
        });
      }
    }
  }, [activeIndex]);
  // useEffect(() => {
  //   const videoTag = document.getElementById("videoDiv");
  //   if (videoTag.muted) {
  //     videoTag.play();
  //   }
  // }, []);

  return (
    <>
      <div className="w-full">
        <Section1 />
        <div className="w-full flex overflow-x-auto">
          {data?.map((list, ind) => (
            <div
              onClick={() => handleClick(list.link)}
              key={list.id}
              className={`relative overflow-hidden h-[15rem] max-[600px]:h-[10rem] ${
                activeIndex === ind
                  ? "w-[25rem] max-[600px]:w-[60rem]"
                  : "w-[10rem]"
              } object-cover bg-gray-200 shadow-lg group transition-all duration-300`} // Set width to 25% of parent and add margin space
              onMouseEnter={() => handleHoverLastItem(ind)}
              onMouseLeave={() => setActiveIndex(activeIndex)}
              onClickCapture={() => handleClick(list.link)}
            >
              {/* Image Section */}
              {!list?.img?.includes("mp4") ? (
                <img
                  src={list.img}
                  alt={list.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                />
              ) : (
                <video
                  playsInline
                  loop
                  autoPlay
                  muted
                  id="videoDiv"
                  src={list?.img}
                  alt={list.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                ></video>
              )}

              {/* Overlay Section */}
              <div
                className={
                  ind === activeIndex
                    ? "h-full pt-[50%] max-[600px]:pt-[40%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 max-[600px]:p-2 text-white opacity-100 transition-opacity duration-300 w-[50rem]"
                    : "h-full pt-[50%] max-[600px]:pt-[40%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 max-[600px]:p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Show overlay on hover
                }
                onMouseLeave={() => activeIndex(0)}
              >
                <h3 className="text-lg font-semibold max-[600px]:text-[0.8rem] pb-2">
                  {list.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="w-full flex max-[600px]:grid max-[600px]:grid-cols-2">
          {data?.slice(3, data?.length - 1).map((list, ind) => (
            <div
              onClick={() => handleClick(list.link)}
              key={list.id}
              className={`relative max-[600px]:w-full overflow-hidden h-[30rem] max-[600px]:h-[20rem] w-1/4 object-cover bg-gray-200 shadow-lg group flex-shrink-0 transition-all duration-300 `} // Set width to 1/4 and added margin
              // If it's the last item, add hover event
              onMouseEnter={() => handleHoverLastItem(ind)}
            >
              {console.log(ind,'index')}
              {/* Image Section */}
        {/* <img
                src={list.img}
                alt={list.title}
                className="w-full  h-full object-cover transition-opacity duration-300 group-hover:opacity-50" // Use w-full to fill the parent div
              />

              {/* Overlay Section */}
        {/* <div
                className={
                  ind === index
                    ? "h-full pt-[70%] max-[600px]:pt-[50%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 text-white opacity-100 transition-opacity duration-300"
                    : "h-full pt-[70%] max-[600px]:pt-[50%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Show overlay on hover
                }
              >
                <h3 className="text-xl font-semibold max-[600px]:text-base pb-2">
                  {list.title}
                </h3>
                <p className="text-sm max-[600px]:text-[0.8rem]">
                  {list.description}
                </p>
              </div>
            </div> */}
        {/* ))} */}
        {/* </div> */}
        <ScrollAnimation
          animateOnce={true}
          animateIn="rubberBand"
          className="max-[600px]:mt-10 max-[600px]:flex flex-wrap justify-center m-auto   my-4 m-auto px-8"
          duration={2}
        >
          <div className=" mt-2  ">
            {data?.map((elem, index) => {
              return (
                <div
                  key={index}
                  id={elem.link}
                  className={`flex flex-wrap max-[600px]:flex-wrap shadow shadow-lg cursor-pointer  transition-all  rounded justify-between max-[600px]:p-2  p-5 bg-yellow-100 m-5 max-[600px]:mx-1  ${
                    index % 2 !== 0 ? "flex-row-reverse  w-full" : "w-full"
                  }`}
                >
                  {elem.img.endsWith(".mp4") ? (
                    <video
                      className="max-[600px]:h-[10rem] h-[20rem] w-[30rem] max-[600px]:w-full object-cover rounded-lg shadow-lg"
                      controls
                      loop
                      autoPlay
                      muted
                      src={elem.img}
                      alt={elem.title}
                    ></video>
                  ) : (
                    <img
                      className="max-[600px]:h-[10rem] h-[20rem] w-[30rem] max-[600px]:w-full object-cover rounded-lg shadow-lg"
                      src={elem.img}
                      alt={elem.title}
                    />
                  )}
                  <div className="m-5  w-[30rem]  max-[600px]:w-full">
                    <h2 className="text-2xl mb-2 font-extrabold max-[600px]:text-lg text-yellow-500">
                      {elem.title}
                    </h2>
                    <p className="text-black leading-2 pr-2 max-[600px]:pr-0 text-base max-[600px]:text-[0.8rem] font-semibold text-justify">
                      {elem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Services;
