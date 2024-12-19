import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../Ui/Carousel";

// IndividualCard component that takes project data as props
const IndividualCard = () => {
  const location = useLocation();
  const { state } = location;
  const {
    title,
    description,
    thumbnail,
    images,
    results,
    challenges,
    solution,
    challengesHeading,
    solutionsHeading,
    resultsHeading,
    descriptionHeading,
  } = state;
  console.log(descriptionHeading, "DESCRIPTION");
  const [mainImage, setMainImage] = useState(thumbnail);

  return (
    <div className="p-4 mx-auto mb-8 max-w-full overflow-x-hidden">
      <div className="flex flex-col m-auto">
        <div className="ml-4 max-w-full overflow-x-hidden">
          {title && (
            <h1 className="text-xl sm:text-2xl mb-2 text-center font-bold">
              {title}
            </h1>
          )}

          {descriptionHeading && descriptionHeading !== "" && (
            <h2 className="text-xl font-semibold mt-4 max-[600px]:mb-4">
              {descriptionHeading}
            </h2>
          )}
          {description && (
            <div
              className="mb-4 break-words" // Ensures long words are broken to fit within container
              dangerouslySetInnerHTML={{ __html: description }} // Render HTML safely
            />
          )}

          <div className="flex flex-col items-center">
            {images && (
              <div className="flex flex-wrap gap-2 max-[600px]:m-1 mb-2 w-full">
                <Carousel
                  images={images}
                  className="bg-blue-200 h-[10rem] w-full"
                />
              </div>
            )}
          </div>

          {challengesHeading !== "" ? (
            <h2 className="text-xl font-semibold mt-4 max-[600px]:mb-4">
              {challengesHeading}
            </h2>
          ) : (
            <></>
          )}
          {challenges && (
            <div
              className="mb-4 break-words"
              dangerouslySetInnerHTML={{ __html: challenges }} // Render HTML safely
            />
          )}

          {solutionsHeading !== "undefined" && solutionsHeading && (
            <h2 className="text-xl font-semibold mt-4 max-[600px]:mb-4">
              {solutionsHeading}
            </h2>
          )}
          {solution && (
            <div
              className="mb-4 w-full break-words"
              dangerouslySetInnerHTML={{ __html: solution }} // Render HTML safely
            />
          )}

          {resultsHeading && (
            <h2 className="text-xl font-semibold mt-4 max-[600px]:mb-4">
              {resultsHeading}
            </h2>
          )}
          {results && (
            <div
              className="mb-4 max-[600px]:mb-2 break-words"
              dangerouslySetInnerHTML={{ __html: results }} // Render HTML safely
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualCard;
