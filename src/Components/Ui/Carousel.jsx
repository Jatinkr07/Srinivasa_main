// src/Carousel.js
import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./carousel.css"; // Optional: for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel relative m-auto">
      <button
        hidden={images?.length === 1}
        onClick={prevImage}
        className="absolute left-0 max-[600px]:top-1/2 top-[40%]  transform -translate-y-1/2 bg-yellow-500 m-2 p-2 rounded-full z-[999]"
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className="carousel-images relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={`${import.meta.env.VITE_Uploads}${image}`}
            alt={`Slide ${index}`}
            className={
              index === currentIndex
                ? "active w-[5rem] h-[10rem] transition-transform duration-500 ease-in-out"
                : "inactive w-[5rem] h-[10rem] transition-transform duration-500 ease-in-out"
            }
          />
        ))}
      </div>
      <button
        hidden={images?.length === 1}
        className="absolute right-0 max-[600px]:top-1/2 top-[40%] transform -translate-y-1/2 bg-yellow-500 m-2 p-2 rounded-full"
        onClick={nextImage}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
