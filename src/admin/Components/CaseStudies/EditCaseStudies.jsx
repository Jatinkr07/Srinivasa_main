import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";

const EditCaseStudies = ({ editItem, setIsOpen, setIsLoading }) => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [descriptionHeading, setDescriptionHeading] = useState("");
  const [description, setDescription] = useState("");
  const [resultsHeading, setResultsHeading] = useState("");
  const [results, setResults] = useState(""); 
  const [challengesHeading, setChallengesHeading] = useState("");
  const [challenges, setChallenges] = useState(""); 
  const [solutionsHeading, setSolutionsHeading] = useState("");
  const [solutions, setSolutions] = useState(""); 
  const [selectedImages, setSelectedImges] = useState([]);

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleImagesChange = (e) => {
    setSelectedImges([...e.target.files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = new FormData();
    projectData.append("title", title);
    projectData.append("description", description);
    projectData.append("results", results);
    projectData.append("challenges", challenges);
    projectData.append("solutions", solutions);
    projectData.append("thumbnail", thumbnail);
    projectData.append("resultsHeading", resultsHeading);
    projectData.append("descriptionHeading", descriptionHeading);
    projectData.append("solutionsHeading", solutionsHeading);
    projectData.append("challengesHeading", challengesHeading);

    selectedImages?.length > 0
      ? selectedImages?.forEach((image) => projectData.append("images", image))
      : images?.forEach((elem) => projectData?.append("images", elem));

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_Backend_url}/admin/edit-projects/${editItem?._id}`,
        projectData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { data } = response;
      setIsOpen(false);
      setIsLoading(false);
      toast.success(data?.message || "Project submitted successfully!");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error submitting the form";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem?.title);
      setImages([...editItem?.images] || []);
      setDescription(editItem?.description);
      setSolutions(editItem?.solution);
      setChallenges(editItem?.challenges);
      setThumbnail(editItem?.thumbnail);
      setResults(editItem?.results);
      setResultsHeading(editItem?.resultsHeading);
      setChallengesHeading(editItem?.challengesHeading);
      setDescriptionHeading(editItem?.descriptionHeading);
      setSolutionsHeading(editItem?.solutionsHeading);
    }
  }, [editItem]);

  return (
    <div className="max-h-[40rem] overflow-y-auto mx-auto py-10 px-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Project</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="thumbnail">
              Thumbnail Image
            </label>
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
            {thumbnail && (
              <img
                src={typeof thumbnail === "object" ? URL.createObjectURL(thumbnail) : `${import.meta.env.VITE_Uploads}${thumbnail}`}
                alt="Thumbnail Preview"
                className="mt-2 w-20"
              />
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="images">
              Additional Images
            </label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleImagesChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <div className="flex flex-wrap mt-2 space-x-2">
              {images.map((elem, index) => (
                <div key={index} className="relative">
                  <img
                    src={typeof elem === "object" ? URL.createObjectURL(elem) : `${import.meta.env.VITE_Uploads}${elem}`}
                    alt={`Image ${index + 1}`}
                    className="w-20"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
            <input
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              type="text"
              value={descriptionHeading}
              placeholder="Enter the Heading"
              onChange={(e) => setDescriptionHeading(e.target.value)}
            />
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(event, editor) => setDescription(editor.getData())}
              className="mt-4"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Results</label>
            <input
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              type="text"
              value={resultsHeading}
              placeholder="Enter the Heading"
              onChange={(e) => setResultsHeading(e.target.value)}
            />
            <CKEditor
              editor={ClassicEditor}
              data={results}
              onChange={(event, editor) => setResults(editor.getData())}
              className="mt-4"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Challenges Faced</label>
            <input
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              type="text"
              value={challengesHeading}
              placeholder="Enter the Heading"
              onChange={(e) => setChallengesHeading(e.target.value)}
            />
            <CKEditor
              editor={ClassicEditor}
              data={challenges}
              onChange={(event, editor) => setChallenges(editor.getData())}
              className="mt-4"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Solutions</label>
            <input
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              type="text"
              value={solutionsHeading}
              placeholder="Enter the Heading"
              onChange={(e) => setSolutionsHeading(e.target.value)}
            />
            <CKEditor
              editor={ClassicEditor}
              data={solutions}
              onChange={(event, editor) => setSolutions(editor.getData())}
              className="mt-4"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCaseStudies;
