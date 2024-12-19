import React from "react";

const Modal = ({ isOpen, setIsOpen, children, className }) => {
  if (!isOpen) return null; // Do not render the modal if it's not open

  const closeModal = () => {
    setIsOpen(false); // Close the modal
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed transition-all inset-0 bg-black bg-opacity-50 z-50"
        onClick={closeModal}
      ></div>

      {/* Modal Container */}
      <div
        className={`${className} fixed   transition-smooth inset-0 flex items-center justify-center z-50`}
      >
        <div
          className={`bg-white ${className} max-[600px]:max-w-fit rounded-lg shadow-lg p-6  w-full`}
        >
          <button
            className="ml-2  top-2 right-2 text-black float-right hover:scale-150 transition-all hover:text-gray-800"
            onClick={closeModal}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
