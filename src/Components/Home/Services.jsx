import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const Services = () => {
  return (
    <>
      <ScrollAnimation animateIn="bounceInLeft">
        <div className="flex flex-wrap max-[600px]:p-4 p-20  justify-center items-center mt-10">
          {/* <div> */}
          <div className="flex  flex-col">
            <img
              className="w-[30rem] max-[600px]:w-[20.7rem] h-[15rem]  mr-10 max-[600px]:m-2"
              src="Picture2.jpg"
              alt=""
            />
            <div className="flex ">
              <img
                className="w-[15rem] max-[600px]:w-[10rem] max-[600px]:pr-1 pr-2 py-1 max-[600px]:m-2"
                src="Picture3.jpg"
                alt=""
              />
              <img
                className="w-[15rem]  max-[600px]:w-[10rem] max-[600px]:pr-1 py-1 max-[600px]:m-2"
                src="Picture4.jpg"
                alt=""
              />
            </div>
          </div>
          {/* </div> */}
          <div className="w-[18rem]  max-[600px]:w-full max-[600px]:p-5">
            <h1 className="text-2xl max-[600px]:text-lg max-[600px]:py-2 font-extrabold">
              We Provide the best earthmoving services & solutions for you
            </h1>
            <p className=" max-[600px]:text-sm">
              Srinivasa Earth Movers is a premier provider of earthmoving
              services, dedicated to delivering excellence in every project. Our
              team of skilled architects, engineers, and construction
              professionals brings innovation, expertise, and integrity to each
              endeavour. Our strong commitment to client satisfaction has
              established us as a reliable and trusted partner in the
              construction industry.{" "}
            </p>
          </div>
          <div>
            <img
              className="h-[25rem] max-[600px]:h-[18rem]  ml-10 max-[600px]:m-2 w-[20rem] object-cover max-[600px]:w-[20rem]"
              src="Picture1.jpg"
              alt=""
            />
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Services;
