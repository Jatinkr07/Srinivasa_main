import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

const PanelCards = () => {
  const [projectCount, setProjectCount] = useState(null);
  const [queriesCount, setQueriesCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchCounts = async () => {
    try {
      const [projectCountResponse, queriesCountResponse] = await Promise.all([
        axios.get(`${import.meta.env.VITE_Backend_url}/admin/get-projects`),
        axios.get(`${import.meta.env.VITE_Backend_url}/admin/get-enquiries`),
      ]);

      // Assuming the API response structure contains a 'count' property
      const projectCount = projectCountResponse.data.count; // Adjust based on your API response structure
      const queriesCount = queriesCountResponse.data.count; // Adjust based on your API response structure

      setProjectCount(projectCount);
      setQueriesCount(queriesCount);

      return { projectCount, queriesCount };
    } catch (error) {
      console.error("Error fetching counts:", error);
      throw error; // Optionally re-throw the error for further handling
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCounts();
  }, []);
  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state
  }
  return (
    <>
      <div className="flex flex-wrap">
        <Cards count={projectCount} title={"Projects"} />
        <Cards count={queriesCount} title={"Enquiries"} />
      </div>
    </>
  );
};

// import { FaUsers } from "react-icons/fa"; // Example icon

const Cards = ({ count, title }) => {
  return (
    <div className="bg-white text-center m-5 shadow-lg rounded-lg p-10 flex items-center justify-between transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-gray-900">{count}</p>
        <h3 className="text-xl font-semibold text-gray-800 mt-2">{title}</h3>
      </div>
    </div>
  );
};

export default PanelCards;
