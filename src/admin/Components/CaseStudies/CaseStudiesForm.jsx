import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";

const CaseStudiesForm = ({ setIsOpen }) => {
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

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleImagesChange = (e) => {
    setImages(Array.from(e.target.files));
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

    images.forEach((image) => projectData.append("images", image));

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_Backend_url}/admin/add-project`,
        projectData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { data } = response;
      toast.success(data?.message || "Project submitted successfully!");

      // Close the modal after successful submission
      setIsOpen(false);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error submitting the form";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="max-h-[40rem] max-[600px]:max-w-screen-sm overflow-y-scroll mx-auto py-10 px-2 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="thumbnail"
            >
              Thumbnail Image
            </label>
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              onChange={handleThumbnailChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="images"
            >
              Additional Images
            </label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleImagesChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About
            </label>
            <input
              className="mt-1 mb-2 p-2"
              type="text"
              placeholder="Enter the Content"
              onClick={(e) => setDescriptionHeading(e.target.value)}
            />
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Results
            </label>
            <input
              className="mt-1 p-2 mb-2"
              type="text"
              placeholder="Enter the Content"
              onClick={(e) => setResultsHeading(e.target.value)}
            />
            <CKEditor
              editor={ClassicEditor}
              data={results}
              onChange={(event, editor) => {
                const data = editor.getData();
                setResults(data);
              }}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Challenges Faced
            </label>
            <input
              className="mt-1 p-2 mb-2"
              type="text"
              placeholder="Enter the Content"
              onClick={(e) => setChallengesHeading(e.target.value)}
            />
            <CKEditor
              editor={ClassicEditor}
              data={challenges}
              onChange={(event, editor) => {
                const data = editor.getData();
                setChallenges(data);
              }}
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Solutions
            </label>
            <input
              className="mt-1 p-2 mb-2"
              type="text"
              placeholder="Enter the Content"
              onClick={(e) => setSolutionsHeading(e.target.value)}
            />
            <CKEditor
              editor={ClassicEditor}
              data={solutions}
              onChange={(event, editor) => {
                const data = editor.getData();
                setSolutions(data);
              }}
              className="mt-1"
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

export default CaseStudiesForm;

// import React, { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import axios from "axios";
// import { toast } from "react-toastify";

// const CaseStudiesForm = () => {
//   const [title, setTitle] = useState("");
//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);
//   const [descriptionHeading, setDescriptionHeading] = useState("");
//   const [description, setDescription] = useState("");
//   const [resultsHeading, setResultsHeading] = useState("");
//   const [results, setResults] = useState("");
//   const [challengesHeading, setChallengesHeading] = useState("");
//   const [challenges, setChallenges] = useState("");
//   const [solutionsHeading, setSolutionsHeading] = useState("");
//   const [solutions, setSolutions] = useState("");
//   const [showForm, setShowForm] = useState(true);

//   const handleThumbnailChange = (e) => {
//     setThumbnail(e.target.files[0]);
//   };

//   const handleImagesChange = (e) => {
//     setImages(Array.from(e.target.files));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const projectData = new FormData();
//     projectData.append("title", title);
//     projectData.append("description", description);
//     projectData.append("results", results);
//     projectData.append("challenges", challenges);
//     projectData.append("solutions", solutions);
//     projectData.append("thumbnail", thumbnail);
//     projectData.append("resultsHeading", resultsHeading);
//     projectData.append("descriptionHeading", descriptionHeading);
//     projectData.append("solutionsHeading", solutionsHeading);
//     projectData.append("challengesHeading", challengesHeading);

//     images.forEach((image) => projectData.append("images", image));

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_Backend_url}/admin/add-project`,
//         projectData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       const { data } = response;
//       toast.success(data?.message || "Project submitted successfully!");

//       // Hide the form after successful submission
//       setShowForm(false);
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message || "Error submitting the form";
//       toast.error(errorMessage);
//     }
//   };

//   return (
//     <div className="max-h-[40rem] max-[600px]:max-w-screen-sm overflow-y-scroll mx-auto py-10 px-2 bg-white rounded-lg shadow-md">
//       {showForm && (
//         <>
//           <h1 className="text-2xl font-bold mb-4">Add Project</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                   htmlFor="title"
//                 >
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   id="title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                   htmlFor="thumbnail"
//                 >
//                   Thumbnail Image
//                 </label>
//                 <input
//                   type="file"
//                   id="thumbnail"
//                   accept="image/*"
//                   onChange={handleThumbnailChange}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                   htmlFor="images"
//                 >
//                   Additional Images
//                 </label>
//                 <input
//                   type="file"
//                   id="images"
//                   accept="image/*"
//                   multiple
//                   onChange={handleImagesChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   About
//                 </label>
//                 <input
//                   className="mt-1 mb-2 p-2"
//                   type="text"
//                   placeholder="Enter the Content"
//                   onClick={(e) => setDescriptionHeading(e.target.value)}
//                 />
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data={description}
//                   onChange={(event, editor) => {
//                     const data = editor.getData();
//                     setDescription(data);
//                   }}
//                   className="mt-1"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Results
//                 </label>
//                 <input
//                   className="mt-1 p-2 mb-2"
//                   type="text"
//                   placeholder="Enter the Content"
//                   onClick={(e) => setResultsHeading(e.target.value)}
//                 />
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data={results}
//                   onChange={(event, editor) => {
//                     const data = editor.getData();
//                     setResults(data);
//                   }}
//                   className="mt-1"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Challenges Faced
//                 </label>
//                 <input
//                   className="mt-1 p-2 mb-2"
//                   type="text"
//                   placeholder="Enter the Content"
//                   onClick={(e) => setChallengesHeading(e.target.value)}
//                 />
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data={challenges}
//                   onChange={(event, editor) => {
//                     const data = editor.getData();
//                     setChallenges(data);
//                   }}
//                   className="mt-1"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Solutions
//                 </label>
//                 <input
//                   className="mt-1 p-2 mb-2"
//                   type="text"
//                   placeholder="Enter the Content"
//                   onClick={(e) => setSolutionsHeading(e.target.value)}
//                 />
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data={solutions}
//                   onChange={(event, editor) => {
//                     const data = editor.getData();
//                     setSolutions(data);
//                   }}
//                   className="mt-1"
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
//             >
//               Submit
//             </button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default CaseStudiesForm;
