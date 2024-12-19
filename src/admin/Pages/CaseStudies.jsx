import axios from "axios";
import React, { useEffect, useState } from "react";
import AddCaseStudies from "../Components/CaseStudies/AddCaseStudies";
import { toast } from "react-toastify";
import EditCaseModal from "../Components/CaseStudies/EditCaseModal";

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState("");
  const [loading, setIsLoading] = useState(false);
  const handleEdit = (item) => {
    setEditItem(item);
    // Logic for editing a case study
    // console.log(`Edit case study with id: ${id}`);
    setIsEdit(true);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const { data } = await axios.post(
      `${import.meta.env.VITE_Backend_url}/admin/delete-project/${id}`,
      {}
    );
    toast?.success(data?.message);
    setCaseStudies(data?.projects);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_Backend_url}/admin/get-projects`
      );
      // console.log(data);
      setCaseStudies(data?.projects);
    };
    fetchProjects();
  }, [loading]);

  return (
    <>
      {isAdd && <AddCaseStudies isOpen={isAdd} setIsOpen={setIsAdd} />}
      {isEdit && (
        <EditCaseModal
          isOpen={isEdit}
          setIsOpen={setIsEdit}
          editItem={editItem}
          setIsLoading={setIsLoading}
        />
      )}
      <div className="p-6 w-[70rem] ">
        <div className="flex justify-between  items-center">
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <button
            onClick={() => setIsAdd(true)}
            className="bg-green-500 p-2 text-white rounded"
          >
            Add New
          </button>
        </div>
        <table className="min-w-full w-[50rem] overflow-x-scroll bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-2 px-4 text-left border border-gray-300">
                S.No
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Image
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Study Name
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          {caseStudies?.length != 0 ? (
            <tbody className="text-gray-600 text-sm font-light">
              {caseStudies.map((study, index) => (
                <tr
                  key={study.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-1 px-4 text-left border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="py-1 px-4  border border-gray-300 flex justify-center">
                    {study?.images?.slice(0, 3)?.map((elem, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={`${import.meta.env.VITE_Uploads}${elem}`}
                        alt={study.studyName}
                        className="w-16 h-16 object-cover m-1"
                      />
                    ))}
                  </td>
                  <td className="py-1 px-4 text-left border border-gray-300">
                    {study?.title}
                  </td>
                  <td className="py-1 px-4 text-left border border-gray-300">
                    <button
                      onClick={() => handleEdit(study)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(study?._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <>
              <div className="flex text-center justify-center items-center">
                <h1 className="text-xl border m-2 p-2 font-extrabold">
                  No Data Found
                </h1>
              </div>
            </>
          )}
        </table>
      </div>
    </>
  );
};

export default CaseStudies;
