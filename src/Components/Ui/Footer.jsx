import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about-us" },
    { title: "Services", path: "/services" },
    { title: "Machineries & Equipments", path: "/machineries-equipments" },
    { title: "Projects", path: "/projects" },
    // { title: "Blogs", path: "/blogs" },
    { title: "Contact Us", path: "/contact-us" },
  ];
  return (
    <footer
      className="text-gray-300 py-10"
      style={{
        backgroundImage:
          "url(https://kasturiearthmovers.com/wp-content/uploads/2023/07/kasturi-earthmovers-footer-new.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between">
          {/* kasturi earth movers Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-white text-xl font-bold ">
              Srinivasa Earth Movers
            </h2>
            <hr className="w-[20%] mb-10  bg-yellow-400 h-[3px] border-none" />
            <p className="mb-4">
              At Srinivasa Earth Movers, we are a leading provider of
              comprehensive services in earth movers, infrastructure
              development, and land development.
            </p>
            <img src={logo} alt="kasturi earth movers Logo" className="h-12" />{" "}
            {/* Replace logo_url with your logo URL */}
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-white text-xl font-bold ">Quick Links</h2>
            <hr className="w-[20%] mb-10  bg-yellow-400 h-[3px] border-none" />
            <div className="flex  gap-20">
              <ul className="space-y-2 grid grid-cols-2 items-center max-[600px]:grid-cols-1">
                {links?.map((elem, index) => (
                  <Link
                    className="flex items-center hover:scale-105 transition-all w-fit"
                    to={elem.path}
                  >
                    <span className="pr-1">
                      <FaArrowRight />
                    </span>
                    {elem.title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-white text-xl font-bold ">Get In Touch</h2>
            <hr className="w-[20%] mb-10  bg-yellow-400 h-[3px] border-none" />
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-bold">Address: </span>62, Lakshmipura,
                Thatguni post , Kanakapura Main Road, Bengaluru-560062
              </li>
              <li className="text-gray-300">
                <span className="font-bold">Phone: </span>+919035379994
              </li>
              <li className="text-gray-300">
                <span className="font-bold">Email: </span>
                info@srinivasaearthmovers.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500">
            Copyright © 2024 Srinivasa Earth Movers. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
