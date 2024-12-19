import { useEffect } from "react";

const useScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Automatically scroll to the top when the component mounts
  useEffect(() => {
    scrollToTop();
  }, []); // Empty dependency array ensures it runs only once on mount

  // Return nothing as we are handling the scroll automatically
  return null;
};

export default useScrollTop;
