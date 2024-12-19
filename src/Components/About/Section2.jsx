import React from "react";
import Container from "../Global/Container";

const Section2 = () => {
  const historyPoints = [
    {
      key: "Our Journey in Excavation",
      value:
        "With over 15 years of dedicated experience in the excavation industry, our journey began with a favorable start in a balance of a prominent excavation and demolition company. During this time, we honed our knowledge and skills, embracing proven practices in the world of excavating and gaining invaluable experiences. Our journey continued as we took on the responsibility of managing projects, overseeing teams of over 20 professionals, including laborers, machine operators, and heavy haulage truck drivers.",
    },
    {
      key: "A Life Changing Moment",
      value:
        "As our expertise expanded, we ventured into land clearing, demolition, and forestry work, taking on challenging projects that often required us to work away from home for extended periods. However, with the imminent arrival of our first child, we made the decision to prioritize family and work-life balance. This life-changing event inspired us to establish our own company, allowing us to be more present for our loved ones while continuing to provide exceptional excavation services to our clients.",
    },
    {
      key: "Diverse Expertise and Equipment",
      value:
        "Our clientele predominantly consists of large civil companies and builders, relying on us for a wide range of services, including basement digging, lift shafts, drainage solutions, large-scale excavations, detailed excavations, and site clearing. From operating 1.5 to 32-ton excavators to handling projects of 500 man-hours, we've amassed extensive experience and diverse skill sets to enable us to tackle a variety of projects. At our company, we’re invested in a fleet of equipment that includes 1.5 ton to 32 ton excavators, complete with a collection of attachments such as hydraulic rock breakers, compactor rollers, and augers, as well as both small and large period track trucks.",
    },
    {
      key: "Passion For Excellence and Collaboration",
      value:
        "Driven by a deep passion for our work, we are committed to excellence and possess a meticulous eye for detail, particularly when it comes to detailed excavation services. Our motivation stems from the opportunity to collaborate with numerous companies, each project presenting a unique set of challenges and the chance to meet new clients. We take pride in assisting our clients in achieving their goals, showcasing our work, malding every jobsite experience different and fulfilling. We look forward to worlding alongside you and being a part of your next experience project.",
    },
  ];

  return (
    <div
      className="w-full py-16"
      style={{
        backgroundImage:
          'url("https://kasturiearthmovers.com/wp-content/uploads/2023/07/kasturi-earthmovers-company-overview-1-scaled.jpg?id=4086")',
      }}
    >
      <Container>
        <div className="w-full mb-5 bg-yellow-50 p-8  bg-white shadow-lg rounded-lg">
          <h3 className="text-3xl max-[600px]:text-xl font-bold text-yellow-400 max-[600px]:mb-3 mb-6">
            Expertise and Capabilities
          </h3>
          <p className="text-lg text-black max-[600px]:text-[0.8rem] leading-relaxed mb-6">
            With a team of highly skilled professionals and advanced equipment,
            we possess the expertise and capabilities to undertake projects of
            various sizes and complexities. Our experienced engineers, project
            managers, and operators work collaboratively to ensure successful
            project outcomes, adhering to timelines and budgetary requirements.
            Our experienced engineers, project managers, and operators work
            collaboratively to ensure successful project outcomes, adhering to
            timelines and budgetary requirements.
          </p>
        </div>

        {/* <div className="w-full p-8 pb-10 bg-white shadow-lg rounded-lg mt-5"> */}
        {/* <div> */}
        {historyPoints.map((elem, index) => {
          return (
            <div
              key={index}
              className="w-full   bg-yellow-50 p-8 shadow-lg rounded-lg mb-5"
            >
              <h3 className="text-3xl max-[600px]:text-xl font-bold text-yellow-400 mb-2">
                {elem.key}
              </h3>
              <p className="text-lg text-black leading-relaxed max-[600px]:text-[0.8rem]">
                {elem.value}
              </p>
            </div>
          );
        })}
        {/* </div> */}
        {/* </div> */}
      </Container>
    </div>
  );
};

export default Section2;
