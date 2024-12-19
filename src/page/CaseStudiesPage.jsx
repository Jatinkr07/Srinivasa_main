import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample data for case studies

const CaseStudiesPage = () => {
  const Navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const handleHoverLastItem = (i) => {
    console.log(i);
    setIndex(i);
  };
  const handleRedirect = (item) => {
    Navigate(`/projects/${item?._id}`, {
      state: item,
    });
  };
  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_Backend_url}/admin/get-projects`
      );
      setProjects(data?.projects);
    };
    fetchProjects();
  }, []);
  return (
    <div className="w-full p-8">
      <h1 className="text-4xl max-[600px]:text-xl max-[600px]:mb-3 font-extrabold mb-6 text-center">
        Our Projects
      </h1>
      <p className="p-4 max-[600px]:p-2 max-[600px]:text-[0.8rem] text-center">
        Discover the remarkable journey of Srinivasa Earth Movers as we delve
        into a captivating case study showcasing our expertise in transforming
        landscapes into havens of luxury. At Srinivasa Earth Movers, our
        extensive experience and commitment to excellence have been demonstrated
        in numerous high-profile projects. We have been instrumental in the
        development of luxury resorts, urban infrastructure enhancements, and
        historic site demolitions.
      </p>
      {projects?.length > 0 ? (
        <>
          <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((list, ind) => (
              <div
                onClick={() => handleRedirect(list)}
                // onClick={() => handleClick(list.link)}
                key={list.id}
                className={`relative max-[600px]:w-full overflow-hidden h-[30rem] max-[600px]:h-[20rem]  object-cover bg-gray-200 shadow-lg group flex-shrink-0 transition-all duration-300 `} // Set width to 1/4 and added margin
                // If it's the last item, add hover event
                onMouseEnter={() => handleHoverLastItem(ind)}
              >
                {/* Image Section */}
                <img
                  src={`${import.meta.env.VITE_Uploads}/${list?.thumbnail}`}
                  alt={list.title}
                  className="w-full  h-full object-cover transition-opacity duration-300 group-hover:opacity-50" // Use w-full to fill the parent div
                />

                {/* Overlay Section */}
                <div
                  className={
                    ind === index
                      ? "h-full pt-[70%] max-[600px]:pt-[40%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 max-[600px]:p-2 text-white opacity-100 transition-opacity duration-300"
                      : "h-full pt-[70%] max-[600px]:pt-[40%] absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-5 max-[600px]:p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Show overlay on hover
                  }
                >
                  <h3 className="text-xl  text-center font-semibold max-[600px]:text-base pb-2">
                    {list.title}
                  </h3>
                  {/* <p className="text-sm max-[600px]:text-[0.8rem]">
                    {list.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-solid"></div>
          <h1 className="ml-4 text-xl">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;
