import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTachometerAlt,
  FaUsers,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";
import Cookies from "js-cookie";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogOut = () => {
    Cookies.remove("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen">
      {/* Mobile Toggle Button */}
      <button
        className={`${
          isSidebarOpen && "hidden"
        } absolute top-4 left-4 z-40 w-fit m-auto rounded-full p-2 text-white bg-gray-800 lg:hidden`}
        onClick={toggleSidebar}
      >
        <FaArrowRight />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-0 z-30 w-64 bg-gray-800 text-white transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center ">
          <button
            className="left-4 z-40 mr-2 p-2 text-white bg-gray-800 border w-fit m-auto rounded-full lg:hidden"
            onClick={toggleSidebar}
          >
            <FaArrowLeft />
          </button>
        </div>

        {/* Admin Profile Section */}
        <div className="p-4 border-b-2 border-gray-400 text-center">
          <img
            src="/admin.png"
            alt="Admin Profile"
            className="w-24 h-24 mx-auto rounded-full border-2 border-gray-500 object-contain"
          />
          <h3 className="text-xl font-semibold mt-2">Admin</h3>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-col lg:text-lg text-base space-y-2 pt-2">
            <li className="w-full border-b-2 border-gray-400">
              <Link
                className="flex items-center mx-4 p-2 rounded  transition-all duration-200 hover:bg-gray-700"
                to={"/admin"}
              >
                <FaTachometerAlt className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="w-full border-b-2 border-gray-400">
              <Link
                className="flex items-center mx-4 p-2 rounded  transition-all duration-200 hover:bg-gray-700"
                to="/admin/client"
              >
                <FaUsers className="mr-2" />
                Clients
              </Link>
            </li>
            <li className="w-full border-b-2 border-gray-400">
              <Link
                className="flex items-center mx-4 p-2 rounded  transition-all duration-200 hover:bg-gray-700"
                to="/admin/add-studies"
              >
                <FaProjectDiagram className="mr-2" />
                Projects
              </Link>
            </li>
            <li className="w-full border-b-2 border-gray-400">
              <Link
                className="flex items-center mx-4 p-2 rounded  transition-all duration-200 hover:bg-gray-700"
                to="/admin/payments"
              >
                <FaMoneyBillWave className="mr-2" />
                Payments
              </Link>
            </li>
            <li className="my-2 w-full ">
              <button
                className="flex items-center mx-4 p-2  px-8 bg-red-500 rounded transition-all duration-200 hover:bg-red-600"
                onClick={handleLogOut}
              >
                <FaSignOutAlt className="mr-2" />
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1  bg-gray-100 overflow-auto transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } lg:ml-0`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
