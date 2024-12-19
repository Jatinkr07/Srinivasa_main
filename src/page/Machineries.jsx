import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import useScrollTop from "../Components/Ui/ScrollTop";

const Machineries = () => {
  useScrollTop();
  const invoiceArr = [
    {
      icon: "Ingersol.png",
      head: "Ingersol Rand Road Roller",
      content:
        "Srinivasa Earth Movers offers professional roller services in Karnataka, utilising advanced machinery for efficient soil compaction that can be applied across various project types, including roadworks, civil construction, and landscaping. With a highly skilled team of operators, we have the expertise to overcome harsh terrain and complex site conditions.",
    },
    {
      icon: "Motorgrader.jpeg",
      head: "Motor Grader",
      content:
        "As a leading earthmoving services provider with more than 10 years of experience, Srinivasa Earth Movers is dedicated to ensuring that your ground preparation and compaction needs are accomplished in a cost-effective and efficient way. Our longstanding reputation across Karnataka is built on consistent service, modern machinery, and a commitment to customer satisfaction.",
    },
    {
      icon: "newExcavator.jpg",
      head: "Excavator",
      content:
        "If you’re looking for an excavator to help with a project, there are plenty of options with us. We provide the excavators which is right for the job, And more importantly, We assure you get a good deal, Choose SEM and get the best price on an excavator rental.",
    },
    {
      icon: "chaindozer.jpg",
      head: "Chain Dozer",
      content:
        "Srinivasa Earth Movers is a leading name in Karnataka's earthmoving industry with over 10 years of experience and a focus on using the latest machinery available to deliver high-quality outcomes for various project requirements. Our 20-tonne Chain Dozer is ideal for civil construction sites, landscaping projects, infrastructure developments, mining and quarry operations, and agricultural works, with our skilled operators ensuring you receive a result that meets your exact specifications.",
    },
    {
      icon: "compressor.jpg",
      head: "Tractor Compressor",
      content:
        "Power up your projects with Srinivasa Earth Movers’ reliable Tractor Compressor! Whether you're digging deep or clearing tough terrain, our heavy-duty compressor delivers the air power you need for efficient excavation and construction. From trenching to foundation work, trust us to keep your equipment running smoothly and your job site on track. Ready to dig deeper? Contact us today for all your excavation needs.",
    },
    {
      icon: "dumper.jpg",
      head: "Dumper",
      content:
        "Offering comprehensive truck and trailer services in Karnataka, Srinivasa Earth Movers is the go-to solution for all your bulk haulage and transportation needs. With a legacy spanning over 10 years, we provide modern, serviced vehicles operated by seasoned professionals.",
    },
    {
      icon: "rope.png",
      head: "Diamond Rope Cutting",
      content:
        "Srinivasa Earth Movers provides a wide range of rock excavation and rock sawing services to meet the demands of excavation and civil construction projects in Karnataka. We have state-of-the-art machinery and industry expertise to handle tough materials such as rocks, concrete, and heavily compacted earth with complete precision and efficiency. We can handle everything from detailed earthworks projects to creating smooth walls for residential and commercial areas and more.",
    },
    {
      icon: "image008.jpg",
      head: "Long Reach Boom",
      content:
        "With more than 10 years of industry experience providing excavation services and throughout Karnataka, Srinivasa Earth Movers makes it easy to source affordable machinery options for any type of excavation project. With an extensive range of options available – from 20 ton excavator through to 25-tonne excavator powerhouses, as well as multiple attachment options – we can accommodate all manner of project types, from residential digs to rock excavations, demolitions, and large-scale civil endeavours.",
    },
  ];

  return (
    <div className="w-full">
      {/* <ScrollAnimation animateIn="rubberBand" duration={2}> */}
      {/* First Row: 3 Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-[600px]:gap-2 mb-10 max-[600px]:mb-2  p-8 max-[600px]:p-2 ">
        {invoiceArr.slice(0, 3).map((elem, index) => (
          <div
            key={index}
            className="w-full hover:scale-105 transition-all cursor-pointer h-[28rem] max-[600px]:h-[28.5rem] max-[600px]:mb-4 p-3 max-[600px]:p-2 my-5 max-w-md mx-auto flex flex-col bg-yellow-100 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="w-full h-[14rem] object-cover rounded-t-lg"
              src={elem.icon}
              alt=""
            />
            <div className="flex flex-col justify-between h-full p-4">
              <div>
                <h2 className="uppercase font-semibold text-xl max-[600px]:text-md text-yellow-500">
                  {elem.head}
                </h2>
                <p className="text-sm text-black font-semibold mt-2">
                  {elem.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: 2 Items */}
      <div className="flex max-[600px]:flex-wrap justify-evenly max-[600px]:mb-2 mb-10">
        {invoiceArr.slice(3, 5).map((elem, index) => (
          <div
            key={index}
            className="w-full hover:scale-105 transition-all cursor-pointer h-[31rem] max-[600px]:h-[32rem] max-[600px]:mb-4 p-3 max-[600px]:p-2 my-5 max-w-md flex flex-col bg-yellow-100 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="w-full h-[14rem] object-cover rounded-t-lg"
              src={elem.icon}
              alt=""
            />
            <div className="flex flex-col justify-between h-full p-4">
              <div>
                <h2 className="uppercase font-semibold text-xl max-[600px]:text-md text-yellow-500">
                  {elem.head}
                </h2>
                <p className="text-sm text-black font-semibold mt-2">
                  {elem.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Third Row: 3 Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-[600px]:gap-2 mb-10 p-8 max-[600px]:p-2">
        {invoiceArr.slice(5).map((elem, index) => (
          <div
            key={index}
            className="w-full hover:scale-105 transition-all cursor-pointer h-[31rem] max-[600px]:h-[32rem] max-[600px]:mb-4 p-3 max-[600px]:p-2 my-5 max-w-md mx-auto flex flex-col bg-yellow-100 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="w-full h-[14rem] object-cover rounded-t-lg"
              src={elem.icon}
              alt=""
            />
            <div className="flex flex-col justify-between h-full p-4">
              <div>
                <h2 className="uppercase font-semibold text-xl max-[600px]:text-md text-yellow-500 ">
                  {elem.head}
                </h2>
                <p className="text-sm text-black font-semibold mt-2">
                  {elem.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
};

export default Machineries;
